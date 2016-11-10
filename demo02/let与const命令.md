# let与const命令


##一.let命令
###1.let命令所在的代码块内有效
```python
for (let i = 0; i < arr.length; i++) {}

console.log(i);
//ReferenceError: i is not defined
```
###2.let命令不存在变量提升
```python
console.log(foo); // 输出undefined
console.log(bar); // 报错ReferenceError

var foo = 2;
let bar = 2;
```
###3.在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”。
```python
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
在声明变量前使用变量时，使用typeof时不再显示undefined，而是报错。

```python
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错
```
此时的x被赋值为y，而y未定义，所以会报错。
```python
function bar(x = 2, y = x) {
  return [x, y];
}

bar(); // [2, 2]
```
正确的写法。
###4.不允许重复声明
```python
function () {
  let a = 10;
  var a = 1;
}

// 报错
function () {
  let a = 10;
  let a = 1;
}
```
不允许重复声明变量
```python
function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
```
不允许重复声明参数
###5.块级作用域与变量
*ES5中可能出现的错误
```python
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}

f(); // undefined
```
f函数中的变量tmp提前声明，导致输出undefined。
```python
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```
用于循环计数的变量i变为全局变量。
```python
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    (function() {
        var tmp = "hello world";
    }());
  }
}

f(); // Wed Aug 24 2016 20:38:10 GMT+0800 (中国标准时间)
```
ES5中通过匿名函数实现块级作用域
*ES6中的块级作用域
```python
{
    {
        let a = 0;
        {
            console.log(a);//0
            /*let a;
            console.log(a);//undefined*/
        }
        console.log(a);//0
    }
    console.log(a);//报错
}
```
外层不能获取内层的变量，内层的变量可以获取外层的变量，也可以重新定义。
###5.块级作用域与函数
*ES5中的块级作用域
```python
// ES5严格模式
'use strict';
if (true) {
  function f() {}
}
//报错
```
ES5中在块级作用域中声明函数在严格模式下会报错。
*ES6中的块级作用域
```python
(function () {
  if (false) {
    function f() { console.log('I am inside!'); }
  }
  f();//ES6会报错，ES5非严格模式下显示"I am inside"
}());
```
ES6可以在块内定义函数，但在块外获取会报错。

考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
```python
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
```
##二.const命令
###1.const声明一个只读的常量。一旦声明，常量的值就不能改变。
```python
const PI = 3.1415;
PI // 3.1415

PI = 3;//重新对PI进行赋值会报错
```
###2.const一旦声明变量，就必须立即初始化
```python
const PI；//报错
```
###3.其他与let的使用相同
##三.全局对象的属性
```python
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined
```