## Iterator与for...of

### Iterator(遍历器)
部署next方法的对象，就具备了遍历器的功能(即能使用for...of)
```javascript
function makeIterator(array) {
	var nextIndex = 0;
	return {
		next: function() {
			return nextIndex < array.length ? 
			{value: array[nextIndex++], done: false} :
			{value: undefined, done: true}
		}
	}
}

var it = makeIterator(['a', 'b']);
console.log(it.next().value);//a
console.log(it.next().value);//b
console.log(it.next().value);//undefined
```

### for..of与for...in
for..of 能够历遍数组、类似数组(arguments对象、DOM NodeList对象)、Set和Map结构的对象。（示例省略）
对于普通对象使用for...of会报错，但还是可以使用for...in进行键名遍历
```javascript
var es6 = {
	edition: 6,
	committee: "TC39",
	standard: "ECMA-262"
}

for(let e of es6) {
	console.log(e);
}//报错
```