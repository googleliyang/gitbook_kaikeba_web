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

https://github.com/googleliyang/kaikeba/blob/master/day15_formdata_upload_pagination_pro/pc/js/index.js

## pc 端 讲师增删改查+分页 bootstrap+bootstrap.min.js+jquery.fileupload.js

## bootstrap table

```js
initTable:function(){
       $("#teacher_infoId").bootstrapTable({
           pagination: true, //分页
           sidePagination:"server",
           //这个函数是有多少行数据就会调用多少次这个函数.
           rowStyle:function(row,index){
               //row.lifePhoto  从数据库拿到的图片地址啊.
               row.lifePhoto="<img width='100' src='"+row.lifePhoto+"'>"
               return row;
           },
           //我们可以通过这个params 想服务器端设置参数.
           // queryParams:function(params){
           //     params.pageSize=10;
           //     params.page=params.offset/params.pageSize+1;
           //     return params;
           // },
           striped:true,
           //添加一个参数，指定分页的条数,
           columns:[
                 {
                     title:"讲师姓名",
                     field:'username'
                 },
                 {
                     title:"讲师年龄",
                     field:'age'
                 },
                 {
                     title:"讲师照片",
                     field:'lifePhoto'
                 },
                 {
                     title:"讲师描述",
                     field:'t_desc'
                 }
             ],
           url:"../api/findTeacher.php?currentPage=1&pageSize=10"
       });
}

```

## tip

## FAQ


## code by yourself
