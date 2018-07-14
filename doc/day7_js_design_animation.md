Js design, animation
Js 中并没有真正的实际模式，接口， oop等，只是用 js 的语法进行模拟


## 工厂模式
js 中创建对象的方式只有两种，字面量方式，构造函数方式
```js

// 字面量方式, 优点简洁高效
var obj = {}
var arr = []

// 构造函数方式, 优点，可以创建一类对象
function build (name, age) {
  this.name = name
  this.age = age
}
```

不管内部怎么创建，把对象创建的细节放到工厂中，起到封装隐藏的作用

Js工厂模式创建的两种两种模式, 根据场景选择合适的方式即可

```js

// way 1, 缺点 返回对象类型太弱，没有明确类型，无法根据类型进行判断操作
function createCar (color, type) {
  var obj = {}
  obj.color = color   
  obj.type = type
  obj.inFor = function () {
    console.log(`My color is ${obj.color}, type is ${obj.type}`)
  }
  return obj
}
createCar('red', 'suv').inFor() // My color is red, type is suv
typeof createCar('', '') // object

// way 2 构造函数加工厂模式, 这种方式 支持 new 操作符，而第一种方式在忘记添加 new 操作符，非严格模式下，this 将指向 window
function Car(color, type) {
  this.color = color
  this.type  = type
}
// Car.prototype.run = function () {
//   console.log(`I can run`)
// }
// 直接更改 prototype 后需要将 prototype 上 constructor 属性指 回原构造函数*
Car.prototype = {
  constructor: Car,
  inFor: function () {
    console.log(`My color is ${this.color}, type is ${this.type}`)
  }
}
function createCar (color, type) {
  return new Car(color, type)
}
var suv = createCar('orange', 'suv')
suv.inFor()

```
使用工厂模式同样也可以实现单例效果

## 单例模式

由于  js 中没有，像 java 的包概念，或是  .net, php 的命名空间概念(在不同的包或命名空间下可以定义相同的变量名)

单例模式实现的几种方式

- 简单单例模式

```js

// way 1, 字面量实现
var singleTon = {
  attr: 'attr',
  method: function () {}
}

// way 2, 使用构造函数方式实现
var instance = null
function SingletonConstructor (attr1, attr2) {     
    this.attr1 = attr1
    this.attr2 = attr2
}
function getInstance () {
  if (!instance) {
    instance = new SingletonConstructor(1, 2)
  }
  return instance
}
var s1 = getInstance()
var s2 = getInstance()
console.log(`Test instance equal`, s1 === s2)

// way 3, 使用闭包加自执行函数方式创建, 模仿后台采用，SingleTon.getInstance()
function SingletonConstructor (attr1, attr2) {     
    this.attr1 = attr1
    this.attr2 = attr2
}
var singleTon = (function () {
  var instance = null
  return {
    getInstance: function () {
      // note: after || need wrap with ()
      instance || (instance = new SingletonConstructor(1, 2))
      return instance
    }
  }
})()
var s1 = singleTon.getInstance()
var s2 = singleTon.getInstance()
console.log(`Test instancel equal`, s1 === s2)  // true

```

### 使用 单例模式实现一个弹窗
前端写弹窗有多重方式，例如，将dom结构直接写在页面中，但这种方式每次用到的时候都要将 dom 结构 copy 到你需要用的地方，为了方便，可以使用  js 创建 Dom 元素，让这个 dom 元素在全局中只存在一个对象（补充 在页面中，频繁创建删除添加 dom 元素，浏览器重绘过多就会卡顿）

```js

var SingleTon = (function () {
  function SingletonConstructor () {
    var div = document.crerateDocumentElement('div')
    // div.innerHtml = 'modal content'
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
  }
  var instance = null
  return {
    // 可以将 content 换成 url, 地址 如表格详情等，调用show 方法展示详情
    // 将 show hide 挂于 instance 对象上，起到了 统一管理资源
    getInstance: function (content) {
        instance || (instance = new SingletonConstructor())
        instance.innerHtml = content
        instance.show = function () {
          this.style.display = 'block'
        }
        instance.hide = function () {
          this.style.display = 'none'
        }
        return instance
    }
  }
})()


```


## 模板方法
类似 java 中的 abstract，包含一些公共方法以及封装子类所有方法的执行顺序，从而让实现自己的业务逻辑
js中，可以把公用代码写在父函数内，如果将来业务逻辑需要改，或者添加新的业务逻辑，可以用子类去重写父类，这样代码
扩展性强，更容易维护
```js
// 创建父类，在原型上添加模板方法
function Interview () {}
Interview.prototype = {
  writtenTest: function () {},
  techTest: function () {},
  init: function () {
    this.writtenTest()
    this.techTest()
  }
}
// 创建子类继承
function BaiduInterview () {}
BaiduInterview.prototype = new Interview()

// 如果子类业务逻辑变化，可以重写父类方法
BaiduInterview.prototype.writtenTest = function () {}

// 使用时，直接 new BaiduInterview 构造函即可

```

## 观察者模式
观察者模式典型实例场景，卖家断货，来货后通知买家，购买

```js

// 发布者
var shop = {
  list: [],
  notify: function () {
    for(var i = 0, fn; fn = this.list[i++];) {
      fn.buy.apply(this, arguments)
    }
  },
  add: function (obj) {
    this.list.push(obj)  
    return this
  }
}

// 订阅者
var xiaomei = {
  buy: function (color, size) {
    console.log(`xiaomei buy ${color} ${size}`)
  }
}

var xiaohong = {
  buy: function (color, size) {
    console.log(`xiaomei buy ${color} ${size}`)    
  }
}
shop.add(xiaohong).add(xiaomei).notify('orange', '22')

```

## js 代理


## Js 动画
js 动画为让 dom 元素每隔一段时间运动，外加一个终止条件

步骤
- 清除上一个定时器
- 开启新的运动定时器(setIterval 轮询时间通常和电脑 Hz 值是一样的，1s执行几次)
- 判断终止条件，执行运动

```js
timer = null
clearInterval(timer)
timer = setIterval(function () {
  if ('end') {
    clearInterval(timer)
  }
}, 20)

```

## 补充

- js typeof 基本类型都可以返回，但对于对象类型只能返回  object, 此时需要使用 instanceof 进行判断
- 阅读jquery $.type 实现方式
- 在日常 js 编码过程中，可以 参考jquery 写法
- 通常 js 中设计模式的使用 为了 降低 代码的可读性
- js 中 常用的位运算，代替普通写法
  x 2 操作通常为 左移动 1 位
  ```js
    3 << 2 // 12
    3 << 1 // 6
  ```
- js 奇淫技巧
- 每次 dom 改变，或 css 改变，浏览器都要重绘
- 树莓派手机服务器
- jq 中  采用 docuemnt.crerateDocumentElement(减少浏览器重绘), 将 多次dom 放到一个文档片段中改为一次性
- angular 中的 watch 使用观察者模式实现
- dom 事件使用的不是 观察者模式，而是事件轮询
- 观察者模式其实就是 自定义事件， 观察者的数组，相当于事件存储，通知方法，相当于事件触发方法
- 目前 vue 瓜分了 angular 大量市场
- 多线程单例性能很低
