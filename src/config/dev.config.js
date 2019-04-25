/**
 * 开发环境配置
 */

import baseConf from './base.conf'
import { defaultsDeep } from 'lodash'

const devConf = {
  // api 配置
  api: {
    url: '/'
  },
  url: {
    baseUrl,
  },
}

defaultsDeep(devConf, baseConf)

export default devConf
