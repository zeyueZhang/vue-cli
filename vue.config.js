// vue.config.js
module.exports = {
  //基本路径
	publicPath: './',
  //输出文件目录
	outputDir: 'build',
  devServer: {
		host: "localhost",
		port: 8000,
		https: false,
		open: true,
  }
}