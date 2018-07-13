This class include js closure, scenes to be used, and js advance function, corey function.

## 补充

### js 设计缺陷

```js
console.log(Object instanceof Function)  // true
console.log(Function instanceof Object)  // true
```

## 闭包
概念: 可以访问其他函数内部，形参，内部变量的函数.
有作用域就会有闭包存在

```js
/**
 *  为了使inner 可以访问到 outer 内部变量 b, 将inner 函数放在 outer 内部
 *  注意: 这样写基本没什么意义(执行完成便会销毁)，闭包通常将  内部函数返回由外部函数决定调用时机, 当我们调用 outer() 时创建闭包
 * @return {null}
 */
 // error
function outer () {
  let b = 1
  function inner () {
      console.log(b)
  }   
}

// right
function outer () {
  let b = 1
  return function () {
    console.log(b)
  }
}
```

### 闭包构建步骤
- 定义外层函数
- 定义内层函数
- 内部函数使用 外部函数参数或变量
- 将内部函数返回

### 闭包的使用场景
因为 js 中没有 private, protected 等作用域，则可以使用闭包来模拟

- 避免全局变量的污染 | 闭包对比 let tem = {[key]: value}
- 全局变量耗费内存，随着页面创建而存在，页面销毁而销毁(不手动销毁), 而闭包于外部函数调用时，才会创建占用内存

#### 实例
- 使用闭包限定作用域, 模仿, set get 函数
```js

/**
 * outer 提供 get 函数，如 java class, 未提供 setter 函数，外部无法对 attr 值进行改变
 * 起到了 内部私有变量作用域 限定
 * @return {[type]} [description]
 */
function outer () {
  var $ = function () {}
  var attr = 10   
  return {
    $: $,
    getAttr: function () {
      return attr
    }
  }
}
var closure = outer()
console.log('attr is', closure.getAttr())

// 对比直接在全局中定义
// ① 闭包可以起到，对 attr 属性 get, set 的限定(可决定是否暴露)
// ② 闭包当函数调用时，才缓存变量，直接在全局中定义，初始便于全局中存在
var closure = {
  $: function () {},
  attr: 10
}
```

- 使用闭包防止全局变量污染*

```js
// 好处 执行完成后内部变量销毁
// 避免冲突
(function () {
    let name = 'John Snow'
    let $ = function () {} // 此时 $ 并不会在 window对象上, 便不会造成 widnow.$被覆盖(假设引入 jQuery)
})()
console.log(name) // name is not undefined

```

## Js 高阶函数
概念:
- 以函数为参数，或 以函数为返回值

### 简化参数, 实现避免重复代码
```js
// bad, such as will pass base param every time when you cal employee salary
function calSalary(base, build) {
  return base + build
}
console.log('employee salary is ', calSalary(200 ,1000))
console.log('manager salary is ', calSalary(200, 3000))

// good
function calSalary(base) {
  return function (build) {
      return base + build
  }  
}
let employee = calSalary(1000)
let manager = calSalary(3000)
console.log('employee salary is ', employee(200))
console.log('manager salary is ', manager(200))
```

## bind 函数
- js 作用域是由运行时决定的(定义函数后，this并不会确定，运行时可以通过 bind 改变其 this 指向)

```js

function test () {
  console.log(this.name)
}

var obj = {
  name: 1,
  test: test
}
test()     //  undefined
obj.test() // 1

```

函数.bind 绑定运行时 this, 返回一个函数
```js
 var obj = {
   name: 'lisa'
 }
function tem() {
  alert(this.name)
}
tem.bind(obj)()

// ----------------way 2--------------
(function tem(){
  alert(this.name)
}).bind(obj)()


// ----------------way 3--------------
function () {

}.bind(window)

```

## 补充
- localStorage, sessionStorage 会走 IO, 速度慢于内存
- 引用数据类型存于 堆 内存中，基础数据类型（Number, booleane ...）存于 栈内存中, 栈内存访问速度快与堆内存
- arguments.callee 表示当前执行的函数自身，通常用于递归，严格模式下失效
- 严格模式下，依旧会声明提前
- 对象实例化过程 var a = new b()

    1 创建一个空对象 a = {}，并且this变量引用指向到这个空对象a

    2 继承被实例化函数的原型 ：a.__proto__ = b.prototype

    3 被实例化方法b的this对象的属性和方法将被加入到这个新的 this 引用的对象中： b的属性和方法被加入的 a里面

    4 新创建的对象由 this 所引用 ：b.call(a)

- fly.js
  可以将 内嵌到 APP 的所有 http 请求重定向到 native, 然后再 androi ios 端统一发出请求
  自动切换底层 engine 适配各种环境

  https://github.com/wendux/fly

  对比 fetch axios

  https://wendux.github.io/dist/#/doc/flyio/compare
-

# FAQ
- 避免全局变量的污染 | 闭包对比 let tem = {[key]: value}
- 避免了 与 全局 $ 冲突，可以使用 closure.$  直接在全局中定义 ? var outer = {$: function(){}}
