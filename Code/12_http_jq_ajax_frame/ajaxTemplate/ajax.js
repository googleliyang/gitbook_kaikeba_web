var $={
     ajax:function(option){
          //创建对象，打开连接，发送请求，接收数据.
          var xhr=new XMLHttpRequest();

          //我要对数据进行一个判断 如果是发送的参数数据是一个object 类型，我就要把
          /*
          * {
           username:"zhangsan",
           age:11
           }
           ==>
           username=zhagnsan&age=11
          *
          * */
          

          //对get 方式提交已经post 方式提交做一个处理
          if(option.type.toLowerCase() == "get"){
              option.url=option.url+"?"+option.data;
              option.data=null;
          }
          option.beforeSend && option.beforeSend();

          xhr.open(option.type,option.url);
          if(option.type.toLowerCase() == "post"){
              xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
          }
          xhr.send(option.data);
          xhr.onreadystatechange=function(){
               if(xhr.readyState==4){
                    if(xhr.status == 200) {
                        var result = xhr.responseText;
                        option.success && option.success(result);
                    }else {
                        //请求失败
                        option.error && option.error();
                    }
                    option.complete && option.complete();
               }
          }
     }
}
