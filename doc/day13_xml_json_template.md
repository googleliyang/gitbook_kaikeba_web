# 13\_xml\_json\_template

This class for xml, json parse, js template .

## ajax

### ajax 请求参数封装

### eval JSON.parse 解析

* 早期的时候 使用 eval 进行数据解析

  ```javascript
  let res = eval("("+data+")")
  ```

* 现在使用 JSON 对象方法进行解析

### 服务器返回 json 数据时，响应头要设置为 json 格式数据

## 前端模板

**BaiduTemplate**：[http://tangram.baidu.com/BaiduTemplate/](http://tangram.baidu.com/BaiduTemplate/) b百度

**ArtTemplate：**[https://github.com/aui/artTemplate](https://github.com/aui/artTemplate) t腾讯

**velocity.js**：[https://github.com/shepherdwind/velocity.js/](https://github.com/shepherdwind/velocity.js/) 阿里

**Handlebars：**[http://handlebarsjs.com/](http://handlebarsjs.com/)

**参考资料:**

[http://blog.jobbole.com/56689/](http://blog.jobbole.com/56689/)

## 小点

* 早期web service 用的都是 xml, 现在由于解析复杂，体积较大用的较少了
* xml 早期用在 服务器配置，可扩展标记语言
* 12306 13 年上线，上亿开发
* php get content url 可以直接解析地址
* 服务器返回 xml 打印出来 是 dom 对象
* vue 等框架让 标签可以写逻辑
* google有一款非常高效的数据传输格式框架ProtoBuffer

## FAQ

* webservice 架构上用的多
* gogle 轻量级数据传输格式
* bootstrap 使用模块定制
* websocket 100 个用户在线 100个 socket连接?

