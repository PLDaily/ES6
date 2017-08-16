const webpack = require('webpack');
const path = require('path')


function resolve (dir) {
  return path.join(__dirname, dir)
}

const config = {
  entry: './main.js',//入口文件
  output: {
    path: resolve('/'),
    publicPath: '/',
    filename: 'bundle.js'//输出文件
  },
  module: {
    rules: [
      {
        test: /\.js$/,//正则匹配文件，对其进e行解析
        exclude: /(node_modules|bower_components)/,//不对node_modules里的js文件进行解析
        use: ['babel-loader'],//使用babel加载器
        // include: [resolve('src')] //包含的文件
      }
    ]
  }
}
module.exports = config;
