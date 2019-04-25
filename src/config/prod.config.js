/**
 * 生产环境配置
 */

import baseConf from './base.conf'
import { defaultsDeep } from 'lodash'


const prodConf = {
  api: {
    
  },
  url: {
    baseUrl,
  }
}

defaultsDeep(prodConf, baseConf)

export default prodConf
