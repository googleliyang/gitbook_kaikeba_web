/*写代码，以面向对象方式去进行组织.*/
(function(dom){
    var huike={
        config:{
            params:{}
        },
        init:function(){
            this.initEvent();
            this.initTable();
        },
        initEvent:function(){
            //首先文件上传.
            this.initFileUpload();
            //确定
            $(".teacher_ok").on("click",function(){
                    var arr=$("#teacherId").serializeArray();

                    for(var i=0;i<arr.length;i++) {
                        //paramas[arr[i].name]=arr[i].value;
                        console.log(arr[i].name);
                        console.log(arr[i].value);
                        huike.config.params[arr[i].name] = arr[i].value;
                    }
                    $.ajax({
                         type:"POST",
                         data:huike.config.params,
                         url:"../api/addTeacher.php",
                         //预期服务器返回的数据类型.
                         dataType:"json",
                         success:function(data){
                             if(data.code==200){
                                 //触发点击事件.
                                 $(".close_win").click();
                             }
                         }
                    })

            });
        },
        initFileUpload:function () {
            $('#fileuploadId').fileupload({
                dataType: 'json',
                done: function (e, data) {
                    //参数进行赋值处理
                    huike.config.params.lifePhoto=data.result.fileurl;
                    //获取到地址，然后我们页面上面做预览的操作.
                    $(".imageshowarea").append("<img width='100' src='"+data.result.fileurl+"'>");
                }
            });
        },
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
    }
    huike.init();
})(document);
