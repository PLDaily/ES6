## Class和Module

### class
```javascript
class Animal {
	constructor(word) {
		this.word = word;
	}
	speak() {
		console.log(this.word);
	}
}

var cat = new Animal("喵");
cat.speak();
```

### 继承
```javascript
class Personal{
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}
	say() {
		console.log(`我叫${this.name}，是${this.sex}`);
	}
}

//var pcd = new Personal('pcs', 'man');
//pcd.say();


class Employee extends Personal {
	constructor(name, sex, age) {
		super(name, sex);
		this.age = age;
	}
}


var pcd = new Employee('pcd', 'man', '21');
pcd.say();//我叫pcd，是man
```

### export与module
```javascript
//profile.js
export var firstName = "David";
export var lastName = "Belle";
export function abc() {
	return 11;
}
//main.js
import {firstName, lastName, abc} from './profile'
console.log(firstName);//David
console.log(lastName);//Belle
console.log(abc());//11
```

```javascript
//profile.js
module.exports =  function abc() {
	return 11;
}

//main.js
var profile = require('./profile');
console.log(profile());//11
```