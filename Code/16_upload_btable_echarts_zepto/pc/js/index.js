/*写代码，以面向对象方式去进行组织.*/
(function(dom){
    var huike={
        config:{
            params:{}
        },
        init:function(){
            this.initEvent();
            this.initTable();
            this.initCharts();
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
                                 console.log("www");
                                 $("#teacher_infoId").bootstrapTable("refresh");
                             }
                         }
                    })

            });
            //使用jquery 事件委托  on  delegate
            $("#teacher_infoId").delegate(".btn_del_teacher","click",function(){
                    //去获取到自定属性
                    var tid=this.dataset['tid'];

                    $.ajax({
                        url:"../api/delTeacher.php",
                        type:"get",
                        data:{
                             tid:tid
                        },
                        dataType:"json",
                        success:function(data){
                            if(data.code==200){
                                 alert("删除成功");
                                 $("#teacher_infoId").bootstrapTable("refresh");
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
                   sidePagination:"server", //要求服务器的数据必须 {"rows":[],"total":100}
                   //这个函数是有多少行数据就会调用多少次这个函数.
                   rowStyle:function(row,index){
                       console.log(row.id);
                       //row.lifePhoto  从数据库拿到的图片地址啊.
                       row.lifePhoto="<img width='100' src='"+row.lifePhoto+"'>";
                       row.operation="<a class='btn btn-danger btn_del_teacher' data-tid='"+row.id+"'>删除</a>";
                       return row;
                   },
                   //我们可以通过这个params 想服务器端设置参数.
                   queryParams:function(params){ //通过此回调函数去向服务器传递参数数据.
                       console.log(params);
                       params.pageSize=params.limit;
                       params.currentPage=params.offset/params.limit+1;
                       return params;
                   },
                   striped:true,
                   pageList:[10,50],
                   //添加一个参数，指定分页的条数,
                   columns:[
                         {
                             title:"讲师姓名",
                             field:'username',
                             width:200
                         },
                         {
                             title:"讲师年龄",
                             field:'age',
                             width:200
                         },
                         {
                             title:"讲师照片",
                             field:'lifePhoto',
                             width:200
                         },
                         {
                             title:"讲师描述",
                             field:'t_desc',
                             width:200
                         }
                         ,
                         {
                               title:"操作",
                               field:'operation',
                               width:200
                         }
                     ],
                   /**/
                     url:"../api/findTeacher.php"
               });
        },
        initCharts:function(){
            $.ajax({
                 url:"../api/findTeacher.php",
                 type:"get",
                 dataType:"json",
                 data:{
                     currentPage:1,
                     pageSize:5
                 },
                 success:function(data){
                     //console.log(data);
                     var datas={
                          ages:[],
                          names:[]
                     }

                     for(var i=0;i<data.rows.length;i++){
                         datas.ages.push(data.rows[i].age);
                         datas.names.push(data.rows[i].username);
                     }

                     console.log(datas);

                     var myChart = echarts.init(document.getElementById('main'));
                     var option = {
                         title: {
                             text: '讲师的年龄分析'
                         },
                         tooltip: {},
                         legend: {
                             data:['年龄']
                         },
                         xAxis: {
                             data: datas.names
                         },
                         yAxis: {},
                         series: [{
                             name: '年龄',
                             type: 'bar',
                             data: datas.ages
                         }]
                     };
                     myChart.setOption(option);



                     var arr=[];
                     for(var j=0;j<data.rows.length;j++){
                            var obj={};
                            obj.name=data.rows[j].username;
                            obj.value=data.rows[j].age;
                            console.log(obj);
                            arr.push(obj);
                     }
                     console.log(arr);
                     //饼状图
                     echarts.init(document.getElementById('e_main')).setOption({
                         series: {
                             type: 'pie',
                             data: arr
                         }
                     });
                 }
            });




        }
    }
    huike.init();
})(document);
