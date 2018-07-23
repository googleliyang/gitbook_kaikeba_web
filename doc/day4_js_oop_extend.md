This class contains oop, extend

## Js OOP

### 实例

一辆小汽车，80km/s 速度行驶，多久行驶完 一条 800km 的道路
```js
// 普通写法
let res = 800 / 80

/**
 * oop 写法, 使用对象（状态和行为模拟，当前变量）
 * 好处: 后期扩展，直接为 car 添加属性即可，颜色等...
 * 尽可能保持使用 this, 避免以后重命名，导致代码执行问题
 * 代码复用性高
 * @type {Object}
 */
var road = {
  length: 800
}
var car = {
  speed: 80,
  calTime: function (road) {
    return road.length / this.speed
  }
}
console.log(`小汽车行驶完 ${road.length} 路需要 ${car.calTime(road)} 时间`)
```



## JS Extend

### 原型继承

### 类式继承

### 组合继承

### Extend 方法
