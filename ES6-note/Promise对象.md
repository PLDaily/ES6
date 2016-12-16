## Promise对象
应用场景：有时我们会将一个异步请求封装在一个函数中，因为可能请求的过程(主体)的代码都是一样的，但请求成功后对返回的数据的操作却各有不同。这时我们便可以使用Promise对象。
### Promise使用介绍
```javascript
var getJSON = function(url) {
	var promise = new Promise(function(resolve, reject) {
		var client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader("Accept", "application/json");
		client.send();

		function handler() {
			if(this.readState === this.DONE) {
				if(this.status == 200) {
					resolve(this.response);
				}else {
					reject(this);
				}
			}
		}
	})
}
getJSON('/posts.json').then(function(json) {
	//deal json
	return json.post;//返回json中的一部分传给下一个then
}).then(function(post) {
	//deal json.post
}).catch(function(error) {
	console.log(error);//错误处理
})
```

### Promise.resolve
将现有对象转化为Promise对象
```javascript
var jsPromise = Promise.resolve($.ajax('./whatever.json'));
```


### async使用介绍
```javascript
function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	})
}

async function asyncValue(value) {
	await timeout(1000);//等待timeout执行结束之后再执行return
	return value;
}
console.log(asyncValue(100));//1s之后显示100
```