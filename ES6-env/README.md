# 搭建ES6环境

近期在实际开发项目中使用了gulp+webpack对vuejs进行编译，对于vuejs的操作是可以支持ES6的，因为可以使用webpack中的babel-loader进行解析。通过babel-loader搭建一个简答的ES6环境。
### 重要实现思路
通过webpack搭建了一个ES6的环境，在webpack.config.js中定义入口文件问main.js，通过babel对main.js中的ES6的语法进行解析，将其转化为ES5的语法，生成文件为bundle.js。通过index.html引入bundle.js文件进行调试。

### webpack.config.js的配置
``` bash
module.exports = {
  entry: './main',//入口文件
  output: {
    filename: 'bundle.js'//输出文件
  },
  module: {
    loaders: [{
      test: /\.js$/,//正则匹配文件，对其进行解析
      exclude: /node_modules/,//不对node_modules里的js文件进行解析
      loader: 'babel',//使用babel加载器
      query: {
        presets: ['es2015']//解析成ES5的形式
      }
    }]
  }
}

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

### package.json
``` bash
{
  "name": "ES6_environment",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {//可以使用npm run的快捷方式
    "start": "live-server --port=3004",
    "watch": "webpack -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.3.17",
    "babel-loader": "^6.2.0",
    "babel-preset-es2015": "^6.3.13",
    "live-server": "^0.9.0",
    "webpack": "^1.12.9"
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