
### 动态数据
JavaScript是一种`弱类型`或者说`动态`语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据：

```javascript
let emotion = '😝' // emotion现在是😝
emotion = 1 // emotion现在是1
emotion = true // emotion现在是true
```

### 数据类型

| 类型  | 特点                                                        |
|-----|-----------------------------------------------------------|
| 原始值 | 不可变，包括：boolean，null, undefined,number,bigint,string,symbol|
| 对象  | 可变，包括: object,function等                                   |


### 类型判断

| 方法 |   范围  |   备注  |
|--|-----|-----|
| typeof |   原始值（基本类型） |   引用类型除function之外返回的都是object  |
| instanceof |  对象   |  基于原型链   |
| Object.prototype.toString  |  所有   |   通用性最强  |



### `tips`

> 使用`Object.prototype.toString` 获取数据类型


```javascript 
/**
 * @param obj：需要获取类型的数据
 * @param compareType: 比较类型
 * @return {boolean|string}
 */
const getType = (obj, compareType = '') => {
  const TYPE_REG = /([A-Z])\w+/g
  const [type] = Object.prototype.toString.call(obj).match(TYPE_REG, '')
  const typeLowercase = type.toLowerCase()
  const compareTypeLowercase = compareType.toLowerCase()
  return compareType
    ? typeLowercase === compareTypeLowercase
    : typeLowercase
}
// test
// getType('1')  => string
// getType('1', 'string')  => true
```

> 实现一个`instanceof`


```javascript
const my_instanceof = (left, right) => {
  const rightPrototype = right.prototype;
  let leftProto = left.__proto__;
  if (leftProto === null) {
    return false;
  }
  if (leftProto === rightPrototype) {
    return true;
  }
  return my_instanceof(leftProto, right);
}

// test
// function Foo() {}
// my_instanceof(Object, Object); // true
// my_instanceof(Function, Function); // true
// my_instanceof(Function, Object); // true
// my_instanceof(Foo, Foo); // false
// my_instanceof(Foo, Object);// true
// my_instanceof(Foo, Function);// true
```
