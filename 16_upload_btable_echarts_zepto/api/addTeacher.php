<?php
               header("Content-Type:text/html;charset=utf-8");
               //获取到客户端的数据，组装成sql 语句，发送数据库服务器
               $username=$_POST['username'];
               $age=$_POST['age'];
               $lifePhoto=$_POST['lifePhoto'];
               $t_desc=$_POST['t_desc'];
               $con=mysql_connect("127.0.0.1","root","");

               if(!$con){
                    die("不能建立连接".mysql_error());
               }
               //连接那个数据库
               mysql_select_db("huike",$con);

               $sql="insert into teacher(username,age,lifePhoto,t_desc) values ('$username','$age','$lifePhoto','$t_desc')";

               if(!mysql_query($sql,$con)){
                    die("Error:".mysql_error());
               }

               echo '{"status":"ok","code":200}';
               //关闭这个数据库连接的
               mysql_close($con);
?>