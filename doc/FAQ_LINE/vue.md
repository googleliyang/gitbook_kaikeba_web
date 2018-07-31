
## vue css 作用域


## vue mvvm

## vue css 限定作用域
### 原理
通过 postcss 在每个 dom 元素增加 data 属性，编译  css 的时候，使用属性选择器(使用到 dom 元素上的属性), 进行样式设置

```html
// 转译前
<style scoped>
.example {
 color: red;
}
</style>
<template>
 <p class="example">hi</p>
</template>

// 转译后
<style>
.example[data-v-5558831a] {
 color: red;
}
</style>
<template>
 <p class="example" data-v-5558831a>hi</p>
</template>

```

### Scope 穿透

- 方式一
在一个 vue 组件中 定义两个 style 作用域
- 方式二 >>> 穿透
```css
<style scoped>
 外层 >>> 第三方组件 {
  样式
 }
</style>
```
- 方式三 为要更改样式 的元素 设置独一无二的 class

## process.env 区分, 当前shell 传入变量

### process env node
process.env属性返回一个对象，包含了当前Shell的所有环境变量。比如，process.env.HOME返回用户的主目录。

通常的做法是，新建一个环境变量NODE_ENV，用它确定当前所处的开发阶段，生产阶段设为production，开发阶段设为develop或staging，然后在脚本中读取process.env.NODE_ENV即可。

### process env 在 webpack 中的应用
在webpack 配置文件中使用，process.env 变量需要从 node 启动命令中 获取(命令行 或 package.json文件) , 而后使用 webpack definePlugin 进行传递

```js
// webpack definePlugin 中定义的变量只作用于 经过 webpack 打包的代码
// 不作用于 webpack 本身执行环境, 如果 webpack 本身需要
// 1) 通过 node 命令执行时传入
// 2) node 命令执行时指定运行文件(分别加载不同变量文件 vue 做法)
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
})
```

### process.env 在webpack 打包给前端时，是对字符串进行替换的吗

### 通过 package.json 指定 webpack 打包变量 Demo
```js
// package.json
"scripts": {
  "build:base": "cross-env BRANCH_ENV=testmybranch webpack --config build/webpack.config.js"
}
// prod.env.js 中接收
module.exports = {
  NODE_ENV: '"production"',
  BRANCH: JSON.stringify(process.env.BRANCH_ENV) || '"base"'
}
// 设置给前端代码
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
})
```
