
课程安排

两天基础，两天插件，1天webpack, 5-6 天的项目，补充两天的知识点

## Vue 1 class

讲师: 马老师 山东潍坊 老师两年多， 钟爱 vue, react, 大学计算机 java 专业，
14 年做 ios, 后因 ios 行情，入足 前端，现在 研究 python 人工智能

前端年初饱和，但是根据业务需求完成，人少

前端  vue 后端 python


## Node.js 在项目中充当了 一个什么角色

> 举例

小米抢购手机，5000 台，在5001 台时就抢购不到了，这是为什么呢?

Php 是多线程，高并发不好(之前最多5000并发)， php 现在 7.0 推出了一个单线程解决高并发，
未来会不会有一种语言统一，go 语言处理高并发很 Nb, 语言没有替代只有更新，
node.js 服务器基本不怎么做

node.js express 设计模式 mvc


## 正式课程

### 历史介绍

    angular  09 年， 后因 16、17 年更新较快拒绝 Star
    react    13 年， facebook
    vue      14 年，用户体验好

> 库和框架的区别

框架像 肯德基的套餐，库像单个汉堡

 ### Vue 缺陷

 如果 data 定义较多，则页面打开很卡顿


## Vue

> 渐进式

加法和简单，90% 加法简单，vue 把难的做好了，我们只需要基于此做一些简单的操作

- vue 上线的时候，在线上运行的是 vue.esm.js

### npm 包 目录结构

![vue_packages](imgs/32/vue_webpack.png)

 runtime 速度快 几十 ms

 ### !通常引用包时， 会在创建 全局 对象 如Vue

![vue_console](imgs/32/vue_to_window.png)

 ### 通常这种全局对象要么给我们抛出一个构造函数，要么 return 一个对象

 如 vue.js 则返回一个构造函数

![vue_object](imgs/32/vue_object.png)


 ## new Vue

 ```js

// 如果 template 中定义了 内容，那么优先 加载 template, 如果没有那么加载的是 #app 的模版
 new Vue({
    el:  '#app', // 限定一块地
    data: {  // 地里种什么
        // 即可以是一个对象，也可以是一个函数
        msg: '黄瓜' // 使用 {{}} 种到地里, msg 中可以 计算， {{}} 中也可以计算
    },
    template: '<div> {{msg}} </div>' //空的时候也会加载，#app, 此时 template 模版中的内容会代替 app 中的内容
 })

 // 或

 data: function() { // data 组建中使用 时 一定要用 function
    return {

    }
 }

 ```

![vue_app_tempalte](imgs/32/vue_template.png)

 ### Vue 实例内容详解释

![vue_instance](imgs/32/vue_object.png)

#### vm

#### $符属性

>  除了数据属性，vue 实例还暴露了一些有用的实例属性和方法，他们都有前缀 $

##### vm.$el === document.getElementById('app')

##### vm.$data === data


## mvc mvvm(model view model_view)

![vue_mvc_mvvm](imgs/32/mvc_mvvm.png)

### vue 指令系统

以 v-xxx 开头，根据不同的值进行 dom 操作

- v-text innerText 等于 {{}}
- v-html innerHtml 用的还算 频繁

#### v-show 是通过控制  display ， v-if 是不渲染，如下图

![vue_show_if](imgs/32/show_if.png)

vue v-if 相当于 appendChild 和 removeChild, 频繁的建议使用 v-show
v-if 有更高的 切换开销，v-show 有更高的初始化渲染开销

v-bind 可以绑定标签上的属性(内置属性和自定义属性(注意这个自定义属性 v-bind:aaa=123))吗简写为 :aaa

v-for 既可以遍历 数组也可以 遍历对象 (遍历对象时，为 key value)

### 绑定事件

v-on:原生时间名=方法名

### 双向数据绑定

![bind_data](imgs/32/bind_data.png)

#### vue 双向数据绑定原理

v-model 其实是 v-bind:value 与 v-on:input 的结合

原理为 如 react 只做了 data 驱动 view 一样， vue 帮你监听了 v-on:valueChange事件，动态设置了 Model 的值

![model_value](imgs/32/model_value.png)

## vue 组建

template 代替 app

> 编写 组建，引入， new Vue template 指定， 使用即可

![component](imgs/32/component.png)

### 组建的创建

> 创建局部入口组建，

> 建议首字母大写，因为可以避免 header 之类的冲突

> 组建使用时， <AppName> 与 <app-name> 方式都可以接受的

打油诗

声子 用子 挂子




## vue 小点

- $root 获取根节点, $parent 取父
- 通讯 $emit, $on

 ## 跳槽点

 - 项目说的好一点，薪资狠一点要，前端工资高


## Tip

- python 单线程

- package-lock.json

    - 作用: 绑定版本库的，如jquery 用了 1.0 则不允许跨到 2.0

- 百度做vue vuex 就不用，就用组建通讯，大型项目才不用 vuex 呢, 大型项目越用 vuex 越臃肿，除非你技术能力特别强, 使用父子, 子父，平行组建通讯, 然后自己封装

- v-for 中写 key 方便 diff 算法


## FAQ


## 后续

- webpack 原理
