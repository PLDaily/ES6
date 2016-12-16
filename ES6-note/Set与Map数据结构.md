## set与map数据结构


### set

|  函数   |   描述   |
| :-----: | :-------------------------: |
| Set.prototype.constructor | 构造函数，默认就是Set函数 |
| Set.prototype.size | 返回Set的成员总数 |
| add(value) | 添加某个值 |
| delete(value) | 删除某个值 |
| has(value) | Set成员中是否含有该值，返回布尔值 |
| clear() | 清空所有成员 |

Set成员中不含相同重复的值

基本用法
```javascript
var item = new Set([1, 2, 3, 4, 4, 5, 5, 5]);
console.log(item);//Set {1, 2, 3, 4, 5}
console.log(item.size);//5
item.add(1);
item.add(6);
item.delete(5);
console.log(item);//Set {1, 2, 3, 4, 6}
console.log(item.has(6));//true
console.log(item.has(5));//false
```

转化为数组
```javascript
var item = new Set([1, 2, 3, 4, 4, 5, 5, 5]);
console.log(item);//Set {1, 2, 3, 4, 5}
var array = Array.from(item);
console.log(array);//[1, 2, 3, 4, 5]
```

### Map
Map与Set的区别：Map需要使用字符串为键值

|  函数   |   描述   |
| :-----: | :-------------------------: |
|size | 返回Set的成员总数 |
|add(value) |  添加某个值 |
|delete(value) | 删除某个值 |
|has(value) | Set成员中是否含有该值，返回布尔值 | 
|clear() | 清空所有成员 |

基本用法
```javascript
var m = new Map();

m.set('edition', 6);
m.set(111, "aaa");
var abc = () => console.log(1);
m.set(abc, "function");
console.log(m.size);//3
console.log(m.get(111));//aaa
console.log(m.has("edition"));//true
```

历遍

|  函数   |   描述   |
| :-----: | :-------------------------: |
| keys() | 返回键名历遍 |
| values() | 返回键值历遍 |
|entries() | 返回所有成员的历遍 |
|forEach() | 逐个历遍 |

```javascript
var map = new Map();
map.set('edition', 6);
map.set(111, "aaa");
var abc = () => console.log(1);
map.set(abc, "function");
for(let key of map.keys()) {
	console.log(key);
}

for(let value of map.values()) {
	console.log(value);
}

for(let [key, value] of map.entries()) {
	console.log(key + "=" + value);
}

map.forEach(function(value, key, map) {
	console.log(key + "--" + value);
})

var abc = {
	aaa: function(key, value) {
		console.log(key + "---" + value);
	}
}

//forEach第二个参数用来绑定this
map.forEach(function(value, key, map) {
	this.aaa(key, value);
}, abc)
```

### WeakMap

只接受对象为键名
``` javascript
var map = new WeakMap();
var ele = document.getElementById('div1');
map.set(ele, "Original");
//...
console.log(map.get(ele));//Original
```