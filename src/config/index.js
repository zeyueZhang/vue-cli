/**
 * 导出配置
 */

const env = process.env.NODE_ENV

if (env === 'development') {
  module.exports = require('./dev.conf')
} else {
  module.exports = require('./prod.conf')
}
