# ES6学习笔记

## let与const
### let只在所在代码的块内有效
var a = [];
for(var i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i);
	}
}

a[6]();//10


var a = [];
for(let i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i);
	}
}

a[6]();//6

### let不能重复声明变量
if(true) {
	let a = 1;
	let a = 100;
	console.log(a);
}
//报错

### const除了只在所在代码块内有效，不能重复声明变量，还有一旦声明，其值就不能改变
const PI = 3.14;
const PI =3;
console.log(PI);
//报错

## 变量的解构赋值


