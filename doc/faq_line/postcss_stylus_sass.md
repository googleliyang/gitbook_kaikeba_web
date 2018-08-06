# postcss stylus sass

## postcss

* cssnext

PostCSS是一个JS插件转换样式表的工具。这些插件能够检验你的CSS、支持变量和混合，转化css3的新特性语法、行内图片等。 其中一个比较为人所知的插件AutoPrefixer就是出自这里，目前上面已经超过200 ... 比如 Autoprefixer PostCSS插件是最受欢迎的CSS处理器之一

## sass

css 预处理语言 功能齐全，个人配置东西少

## postcss 对比 sass

sass 中实现的功能，基本postcss 都可以找到插件实现, postcss 提供超过 200种 css 写法的 预编译, sass-loader 只提供了 sass 的解析，所以 postcss 在功能上要强大于单一功能的 sass-loader

### postcss 使用

以 webpack 为例

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            // 使用 postcss-loader 即可
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
Then create postcss.config.js:
module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')
  ]
}
```

