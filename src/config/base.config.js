/**
 * 通用配置
 */

const statusCode = {
  // 成功
  success: 200,
}

module.exports = {
  // api 配置
  api: {
    // 网络请求超时时间
    timeout: 30000,
    // 状态吗定义
    code: statusCode,
    vm: '',
    // 不以 toast 提示的状态码列表
    excludedTipCode: [
     
    ],
    tip: {
      unknown: '未知错误',
      serverError: '服务器繁忙，请稍后再试',
    }
  },
  url: {
  
  },
  // 微信配置
  wx: {
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
      'startRecord',
      'stopRecord',
      'onVoiceRecordEnd',
      'playVoice',
      'pauseVoice',
      'stopVoice',
      'onVoicePlayEnd',
      'uploadVoice',
      'downloadVoice',
      'chooseImage',
      'previewImage',
      'uploadImage',
      'downloadImage',
      'translateVoice',
      'getNetworkType',
      'openLocation',
      'getLocation',
      'hideOptionMenu',
      'showOptionMenu',
      'hideMenuItems',
      'showMenuItems',
      'hideAllNonBaseMenuItem',
      'showAllNonBaseMenuItem',
      'closeWindow',
      'scanQRCode',
      'chooseWXPay',
      'openProductSpecificView',
      'addCard',
      'chooseCard',
      'openCard'
    ],
    menuMap: {
      // 发送给朋友
      shareFriends: 'menuItem:share:appMessage',
      // 分享到朋友圈
      shareTimeline: 'menuItem:share:timeline',
      // 分享到 QQ
      shareQQ: '"menuItem:share:qq',
      // 收藏
      favorite: 'menuItem:favorite',
      // 分享到 微博
      shareWeibo: 'menuItem:share:weiboApp',
      // 分享到 FB
      shareFB: 'menuItem:share:facebook',
      // 分享到 QZone
      shareQZone: 'menuItem:share:QZone',
      // 编辑标签
      editTag: 'menuItem:editTag',
      // 删除
      delete: 'menuItem:delete',
      // 复制链接
      copyUrl: 'menuItem:copyUrl',
      // 原网页
      originPage: 'menuItem:originPage',
      // 阅读模式
      readMode: 'menuItem:readMode',
      // 在 QQ 浏览器中打开
      openWidthQQBrowser: 'menuItem:openWithQQBrowser',
      // 在 Safari 中打开
      openWithSafari: 'menuItem:openWithSafari',
      // 邮件
      email: 'menuItem:share:email'
    }
  },
  // 重新发送验证码间隔时间（s）
  resendVcodeInterval: 60,
  // 最大尝试授权次数
  maxTryAuthTimes: 3,
  // 运行环境
  runTimeEnv: {
    app: '1'
  },
}
