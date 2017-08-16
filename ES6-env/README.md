# 搭建ES6环境

近期在实际开发项目中使用了gulp+webpack对vuejs进行编译，对于vuejs的操作是可以支持ES6的，因为可以使用webpack中的babel-loader进行解析。通过babel-loader搭建一个简答的ES6环境。
### 重要实现思路
通过webpack搭建了一个ES6的环境，在webpack.config.js中定义入口文件问main.js，通过babel对main.js中的ES6的语法进行解析，将其转化为ES5的语法，生成文件为bundle.js。通过index.html引入bundle.js文件进行调试。

### webpack.config.js的配置
``` bash
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

```

### index.html
``` bash
<!DOCTYPE html>
<html>
  <head>
    <title>ES6</title>
  </head>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```
### .babelrc
```bash 
{
  "presets": [
    "env"
  ],
  "plugins": ["transform-runtime"],//用于Promise、Set、Map 等新增对象，Object.assign、Object.entries 等全局对象上的新增方法都不会转码
}
```
### package.json
``` bash
{
  "name": "ES6_environment",
  "version": "1.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "live-server --port=3004",
    "watch": "webpack -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.0",
    "live-server": "^1.2.0",
    "webpack": "^3.5.4"
  }
}
```
### 执行命令
``` bash
$ npm install //安装依赖
$ npm run watch //用于监听文件是否发生变化
$ npm start //打开浏览器监听port：3004
```
### 注意事项
以上方法是将ES6的语法编译成ES5后执行，在调试的时候有时不是能很好的体现ES6的属性。也可以通过google浏览器F12在console中直接输入代码编译调试。