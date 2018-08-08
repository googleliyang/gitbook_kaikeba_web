This class for simple demo, include pagination, bootstrap table plugin, jp fileupload...
& php provider api, use formdata upload file async.

> This class for last homework

| Today    | md | homework |
| -------- | -------- | ------ |
| upload  | ✓     | ✓  |
| pagination | ✓    | ✓  |
| formdata    | ✓    | ✓    |


由于音效不好，8:45开始讲作业.

作业:

使用 ajax2 去做文件上传 formData+fileReader 去写文件上传.
pc 端 讲师增删改查+分页

https://github.com/aui/artTemplate

bootstrap+bootstrap-table.min.js+jquery.fileupload.js+echarts.js+template-web.js

移动端下拉刷新，滚动加载 mescroll.js

## fileupload
```js
<input type="file" id="lifePhotoId" name="lifePhoto" data-url="../api/teacherupload.php">
$('#lifePhotoId').fileupload({
   dataType: 'json',
   //上传成功之后就会调用这里.
   done: function (e, data) {
   //根据返回的数据的类型做一些处理
   // code:10003, message:""
   var url=data.result.url;
   params.lifePhoto=url;
   //做一个预览的效果.
   $(".image_area_file div").append("<img src='"+url+"' width='100' height='100'>");   
});
```

## bootstrap data

## formdata

## 讲师模块封装

基于代码的封装：

​ 1：方法级别的代码提炼

​ 2：有很多的方法可以被重用，提炼成工具类（js 库）

​ 3：假设某一个类的方法可以被重用，提炼成模块。

​ 4：还有模块级别的代码提炼。

> 代码组织方式

```js

(function (dom){
  var huike = {
    config: {
      param: {}
    },
    init: function () {
      this.initDom()
      this.initEve()
    }
  }  
  huike.init()
})(docuemnt)

```

## pc 端 讲师增删改查+分页 bootstrap+bootstrap.min.js+jquery.fileupload.js

## tip

## FAQ


## code by yourself
