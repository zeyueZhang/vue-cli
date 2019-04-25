import axios from 'axios'
import config from '../../config/index'
import queryString from 'query-string'

// 默认
import apiMap from './apiMaps/index'

/**
 * 请求拦截器处理函数
 * @param config
 * @returns {*}
 */
const requestInterceptorHandler = config => {
  if (config.data) {
    const configData = {}
    Object.keys(config.data).forEach(key => {
      const val = config.data[key]

      if (typeof val === 'object') {
        try {
          configData[key] = JSON.stringify(val)
        } catch (e) {
          configData[key] = val
        }
      } else {
        configData[key] = val
      }
    })
    config.data = configData
  }

  if (config.method.toUpperCase() === 'POST') {
    config.data = queryString.stringify(config.data)
  }
  return config
}

/**
 * 请求拦截器错误处理函数
 * @param error
 */
const requestInterceptorErrorHandler = error => {
  console.log(error)
}

const createResponseInterceptorHandler = (type) => {
  return response => {
    const {data} = response
    const {code, info} = data

    let actEnd = routesMap.notFound
    let pageFault = routesMap.notFound

    if (!code) {
      const {origin, pathname} = window.location,
        url = `${origin}${pathname}#${actEnd}`
      return window.location.replace(url)
    }

    if (code === config.api.code.success) {
      return data.data || data
    } else if (code === config.api.code.pageFault) {
      // 分享已失效
      const {origin, pathname} = window.location,
        url = `${origin}${pathname}#${pageFault}`
      window.location.replace(url)
      return Promise.reject(new ResponseException(info, data))
    } else if (code === config.api.code.notLogin) {
      accountService.authorize()
    }else {
      if (!config.api.excludedTipCode.includes(code)) {
        // 非排除特定状态码，进行消息提示
        Toast.info(info || config.api.tip.unknown, 1.5)
        return Promise.reject(new ResponseException(info, data))
      } else {
        return Promise.reject(new ResponseException(info, data))
      }
    }
  }
}

/**
 * 响应拦截器错误处理函数
 * @param error
 * @returns {Promise<never>}
 */
const responseInterceptorErrorHandler = error => {
  // Toast.info(config.api.tip.serverError)
  return Promise.reject(new NetworkException('网络请求错误', error))
}

export const createAxiosInstance = (type, payload = {}) => {
  payload.headers = payload.headers || {}
  const headers = {...payload.headers}

  if (process.env.REACT_APP_ENV === 'production.test') {
    headers.dev = 'dev'
  }

  // 判断 vm 是否存在，设置 vm
  const vm = config.api.vm
  vm && (headers.vm = vm)

  const axiosInstance = axios.create({
    baseURL: config.api.url,
    timeout: config.api.timeout,
    headers,
  })

  axiosInstance.interceptors.request.use(
    requestInterceptorHandler,
    requestInterceptorErrorHandler,
  )

  axiosInstance.interceptors.response.use(
    createResponseInterceptorHandler(type),
    responseInterceptorErrorHandler,
  )

  return axiosInstance
}

const createRequestMethods = (axiosInstance, apiMap) => {
  const http = {}
  Object.keys(apiMap).forEach(requestMethod => {
    const methodApis = apiMap[requestMethod]
    Object.keys(methodApis).forEach(api => {
      http[api] = data => {
        return axiosInstance({
          url: methodApis[api],
          method: requestMethod,
          [requestMethod.toUpperCase() === 'POST' ? 'data' : 'params']: data
        })
      }
    })
  })
  return http
}

export default createRequestMethods(createAxiosInstance(), apiMap)
