# ES6学习笔记

## let与const
### let只在所在代码的块内有效
``` javascript
var a = [];
for(var i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i);
	}
}

a[6]();//10
``` 

``` javascript
var a = [];
for(let i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i);
	}
}

a[6]();//6
``` 

### let不能重复声明变量
``` javascript
if(true) {
	let a = 1;
	let a = 100;
	console.log(a);
}
//报错
``` 

### const除了只在所在代码块内有效，不能重复声明变量，还有一旦声明，其值就不能改变
``` jaascript
const PI = 3.14;
const PI =3;
console.log(PI);
//报错
``` 

## 变量的解构赋值

### 数组的解构赋值
``` javascript
var [a, b] = [1, 2];
console.log(a);//1
console.log(b);//2
```
``` javascript
//解构不成功被赋值为undefined
var [a, b] = [1];
console.log(a);//1
console.log(b);//undefined
``` 

### 对象的解构
``` javascript
var {foo, bar} = {foo: "aaa", bar: "bbb"}
console.log(foo);//aaa
console.log(bar);//bbb
``` 
### 使用实例(以数组解构为例，对象解构同理，函数返回的是对象)
``` javascript
function abc() {
	return [1, 2];
}
var [a, b] = abc();
console.log(a);//1
console.log(b);//2
``` 

## 字符串的扩展

### codePointAt方法
JS中字符以UTF-16的格式存储，每个字符为为2个字节，可存字符为2^8*2^8个字符，但超出这个范围即Unicode编码大于65536，则通过四个字节存储。
以古文"𣦵"为例，Unicode值为145845，大于65536，以4个字节存储。
现有的charAt、charCodeAt只能处理Unicode编码范围内的字符，ES6引入codePointAt方法
``` javascript
var s = "𣦵";
console.log(s.codePointAt(0));//145845
``` 

### String.formCodePoint方法
``` javascript
String.formCodePoint(145845);//𣦵
//注：该方法通过babel-loader解析不起作用，如浏览器不支持该属性则报错
``` 

### Unicode表示法
在\u后括号内加字符编码
``` javascript
console.log("\u{239B5}");//𣦵
``` 

### 正则u修饰符
正则u修饰符匹配Unicode编码大于65536的字符，不加u只能匹配Unicode编码小于65536的字符
``` javascript
var s = "𣦵";
/^.$/u.test(s);//true
``` 

### contains、startsWith与endsWith
``` javascript
var s = "Hello World!";
console.log(s.startsWith("Hello"));//true
console.log(s.endsWith("!"));//true
console.log(s.contains("o"));//true
``` 

### repeat
``` javascript
conosle.log("x".repeat(3));//"xxx"
``` 

### 模板字符串
``` javascript
var name = "pcd", age = 21;
console.log(`my name is ${name},  ${age} years old`);//my name is pcd,  21 years old
``` 

## 数值的扩展

### 二进制、八进制表示法
``` javascript
//0b表示二进制
console.log(0b1111);//15
//0o表示八进制
console.log(0o111);//73
``` 

### 全局函数的处理
现有的全局函数

|  函数   |   描述   |
| :-----: | :-------------------------: |
| decodeURI()			| 解码某个编码的 URI。|
| decodeURIComponent()	| 解码一个编码的 URI 组件。|
| encodeURI()			| 把字符串编码为 URI。|
| encodeURIComponent()	| 把字符串编码为 URI 组件。|
| escape()	            | 对字符串进行编码。|
| unescape()				| 对由 escape() 编码的字符串进行解码。|
| eval()	    			| 计算 JavaScript 字符串，并把它作为脚本代码来执行。|
| isFinite()				| 检查某个值是否为有穷大的数。|
| isNaN()				| 检查某个值是否是数字。|
| Number()				| 把对象的值转换为数字。|
| parseFloat()			| 解析一个字符串并返回一个浮点数。|
| parseInt()				| 解析一个字符串并返回一个整数。|
| String()				| 把对象的值转换为字符串。|


### Number.isFinite方法
```javascript
console.log(isFinite(123));//true
console.log(isFinite("123"));//true
console.log(Number.isFinite(123));//true
console.log(Number.isFinite("123"));//false
```

### Number.isNaN方法
```javascript
console.log(isNaN(NaN));//true
console.log(isNaN("NaN"));//true
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN("NaN"));//false
```

### 将全局的parseFloat与parseInt移植到Number对象上

### Number.isInteger方法
用于判断一个值是否为整数
```javascript
console.log(Number.isInteger(123));//true
console.log(Number.isInteger(123.1));//false
console.log(Number.isInteger("123"));//false
```

### Math.trunc用于出去一个数的小数部分
```javascrip
console.log(Math.trunc(-4.9));//-4
console.log(Math.trunc(4.9));//4
```

## 数组的扩展

### Array.from
将类数组对象(arguments, 返回的DOM对象)、可历遍对象、Set与Map结构转化为一个真正的数组。
```javascript
function abc() {
	Array.from(arguments).forEach(function(x) {
		console.log(x);
	})
}
abc(1, 2, 3, 4);//1 2 3 4
```

### Array.of
将一组值转化为数组
```javascript
console.log(Array.of(1, 2, 3));//[1, 2, 3]
```

### find与findIndex
```javascript
console.log([1, 2, 3, 4, 5].find(function(value, index, arr) {
	return value > 3;
}));//4

```
```javascript
console.log([1, 2, 3, 4, 5].findIndex(function(value, index, arr) {
	return value > 3;
}));//3
```

### fill
填充数组
```javascript
console.log(['a', 'b', 'c'].fill(1));//[1, 1, 1]
```
参数一位需要填充的值，参数二为起始位置，参数三为结束位置
```javascript
console.log(['a', 'b', 'c'].fill(1, 1, 2));//['a', 1, 'c']
```

### entries、keys与values
```javascript
for(let index of ['a', 'b'].keys()) {
	console.log(index);//0 1
}
```
```javascript
for(let elem of ['a', 'b']) {
	console.log(elem);//'a' 'b'
}
//使用values()时报错，可直接去除则访问value
```
```javascript
for(let [index, elem] of ['a', 'b'].entries()) {
	console.log(index, elem);//0 'a'; 1 'b';
}
```