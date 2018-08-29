#### let和const

* let用于变量声明，相对var不会提升成全局变量

  * ```js
    if(true) {
        let a = 1;  // 这个a在外部无法使用
    }
    ```

  * 

* const 用于值不会改变的量（常量）的声明

* ```js
  // 变量
  let num = 1;
  // 常量
  const PI = 3.1415926;
  ```

* 



#### 箭头函数

* 相对function/ES6函数简写，  箭头函数的this会向上级函数绑定

* 同时arguments也向上绑定

* ```js
  var obj = {
      init:function() {
          var xx = () => {
  			// this是init的this，也就是obj
          }
      }
  }
  ```

* 写法非常爽: （左边）一个参数小括号可省，（右边）一行代码大括号可省

* 箭头函数本身没有this,会向上级function绑定this,其不可以做为构造函数的使用



#### promise

* promise中有三种状态：
  * resovle函数调用后，就成为   resovled/*fulfilled*  状态
  * reject函数嗲用后， 就成为  rejected 状态
  * 还没有调用这两个函数中任意一个函数的时候 pending状态（初始状态），待发
  * __该状态一经改变，无法回退，和暂停__

* promise是一个存储异步操作的容器，异步执行后，标记不同的成功/失败/发生中状态，后续根据状态来控制异步执行顺序

* ``` js
  ajax('/a',function() {
      // 请求a后请求b
  	ajax('/b',function(){
  		// 请求b以后的操作
      });
  });
  // 嵌套回调函数地狱
  
  new Promise(function(resolve,reject){  
  //成功调用 resolve(数据)   
  //失败调用 reject(err)     
  }).then(function(数据) {
      // 成功对应的函数
  },function(err){
      // 失败对应的函数
  })
  ```

![1535375952016](C:\Users\heima\Desktop\全栈5期\08-ＮodeJS项目-第1天-{ 登录、注册 }\4-源代码\assets\1535375952016.png)

#### 解构赋值

* ```js
  let obj = { a:1,b:2,c:3};
  // 我们需要只获取其中a和b属性
  let a = obj.a; let b = obj.b; 
  // 也可以这样
  let { a,b } = obj; // 只获取其中部分key值
  let [a,,,d] = [1,2,3,4];  // a:1    d:4
  ```



#### koa

* 相比express 更少的内置中间件，没有了异步回调函数，使用async await 更优雅