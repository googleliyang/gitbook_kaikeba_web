

## 既像同步一样写代码又像异步一样不卡代码执行，性能高

Promise 可以消除异步操作，比较巧妙的封装

```js

new Promise(function(resolve, reject) {


})

// promise.all 执行一个失败则失败，全成功才成功


// promise.race 同时读五个资源 哪个成功用哪个，失败的忽略




```

## promise 实现原理

## async await



## generate yield(传参和返回)

> yield 一墙之隔, 暂时放弃执行, 踹一脚 走一步

> 直接执行 generate 函数不会运行，需要拿 generate 返回值 去执行

> 当异步嵌套时，使用 yield 暂停一会儿 再执行

- generate 与 promis 一样用来解决异步问题

- 普通函数一路到底，generate 中间能停，如出租车

- 让函数停一会儿再 运行


- 有中间结果


### generate 实现原理

内部将 yiled 上下 分为两个函数, 一个一个执行

```js
function* show(param) {
  console.log(`get the param is ${param}`)
  let res  = yield 10
  console.log(`res is ${res} in generate`)
  let res1 = yield 100
  console.log(`res1 is ${res1} in generate`)
  return 1000
}

let gen = show()
let r = gen.next(20)
console.log(`get res from generate is`, r)
let r1 = gen.next(30)
console.log(`get res from generate is`, r1)
let r2 = gen.next()
console.log(`generate return is`, r2)


```




## Tip

- ajax 直接请求新建的 txt 文件
```js
(function () {
  $.ajax({
    url: '../arr.txt',
    dataType: 'json',
    success: function(data) {
      const {name: n, age: a} = data
      alert(n)
    },
    error: function (err) {
      console.error(err)
    }
  })
})()
```
