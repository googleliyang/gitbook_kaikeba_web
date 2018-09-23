
## vue 第二天 2：51 分钟


## Vue 组建以及根入口组建写法

- ?? 入口组建以及页面主体组建加 vue 插槽

## 组建之间的通讯

![com_contact](imgs/33/com_contact.png)

vue 中数据流向是单向数据流，父组建流向子组建

### 子组建往父组建传值

- 在父组建加一个自定义方法
- 在子组建使用 this.$emit({methodName}, {data}) 触发

> 也可以父组建将方法传给，子组建，但是这样只能一层一层

![com_contact](imgs/33/child_to_parent.png)

## 全局组建

```vue
Vue.component('myLi', {
    // 内部 data, ...template
    template: '
        <li>
            预留的第一个坑
            <slot name='two'> </slot>
            预留的第二个坑
            <slot name='three'> </slot>
        </li>
    '
})

// 使用
var App = {
    template: '' +
        <myLi>
            <h2 slot='two'> </h2>
            <h3 slot='two'> </h3>
        </myLi>
     ''
}

```

### 父组建向子组建传值，只要 通过 props 即可

## 插槽改变组建内容

slot vue 内置组建

## 封装 element ui 按钮

组建通讯传值的时候，有 ':' 绑定的属性是 data 中的，没有 ':' 绑定的属性 是静态属性

## 过滤器

> 给当前数据添油加醋，如时间 截取 s, 金钱增加 $

// 过滤器有两种

- 局部过滤器
- 全局过滤器

> 过滤器可以传参

局部过滤器定义在组建中用法如下

```vue

var App = {

    data () {
        price: 0
    },
    tempalte: '

      <div>
        <h3>{{price | myCurrentcy(param)}}</h3>
      </div>

    ' ,
    filters: {
        myCurrentcy: function (value, param) {
            return '$' + value
        }
    }

}

```


## watch 监听， 对象属性的深度监听

> 在使用 watch 监听复杂数据类型，如数组，对象时，如下

list: [{name: 'li'}], 改变这个 数组内第一个对象的 name 值并不会，执行watch 代码

因为， list 指向一个地址，里边的对象是一个地址，字符串又是一个内存地址

- 解决办法深度监听

```vue
stus: [{name: 'li'}]
watch: {
    stus: {
        deep: true, // 深度监听
        handler:　function(newV, oldV) {
            console.log(newV[0].name)
        }
    }
}
```

## 计算属性 | 对比 watch

计算属性的使用，通常 watch 属性只用来监听一个属性的变动, 若是多个属性执行一个函数写着冗余
对于监听多个属性执行同一个函数的方式 我们使用 计算属性

如音乐播放 需要监听，列表

![compute_attr](imgs/33/compute_attr.png)


### 计算属性 setter

 ```vue
computed: {

    set: function(newV) {
         console.log(newV)
         this.currentIndex = newV
    },
    get: function() {
        return this.music[this.currentIndex].songSrc
    }

}
```

## 组建的生命周期

 > beforeCreate 疑问 this 打印出来了， data 没挂载上, 在这里发起请求的话，属性赋值不了

 > created 创建实例后，用来发起请求

 > beforeMount 在vue dom 挂载之前

 > mounted  在 vue dom 挂载之后，所以该方法可以用来操作，dom 例子如下

 在未编写 template 的根组建中, document.getElementById('app'), 在beforeMount中取到值了，而在 mounted 中取不到，
 因为 template 中没有  #app 的元素，但讲 #app 覆盖了


![mounted_beforeMounted](imgs/33/mounted.png)

> beforeUpdate, 在更新 Dom 之前调用，应用，获取原始 dom

> updated 在更新dom 之后调用, 获取更新后的 dom

![before_update](imgs/33/before_update.png)

 > beforeDestroy 销毁之前, v-if 控制销毁， 可以用于 清除定时器

 > destroyed 销毁之后

## keep alive

> 组建切换时，用户滑动都某一个部分，切换至另一个组建，再切换回滑动组建时，滑动到的位置不能得到回显

### 可以在局部使用 keep-alive, 能在组建的切换过程中，将状态保留在内存中，防止重复渲染 Dom

```vue
...
template: '
    <keep-alive>
        <Test v-if = 'isShow' />
    </keep-alive>
'
```

### 使用 keep-alive 后  created 以及 destroy 都不执行力， 需要采用 其他方法

> actived 组建被激活

> deactivated 组建被停用了

解决办法 采用 keep-alive

![keep_alive](imgs/33/keep_alive.png)


  > 老师的那个问题

  因为 使用 document.getElementById('app') 取值， vue 挂载后 template 替换了 #app 组建，所以 mounted 之后就获取不到 #app 了






## Tip

- 组建重用的时候 created 方法不会再走了， 需要监听路由的钩子

### 公司里能用到的自定义指令很少

- props: []

## Faq

- 最初找 vue 视频，，，要是最初英语，就可以了



## 代码编写

- 入口组建以及页面主体组建加 vue 插槽, 全局组建， 组建按钮

- 胜之余人 付出多于人

- 关于 vue 很熟的，问问题
