<?php

       header("Content-Type:text/html;charset=utf-8");

       $username=$_POST["username"];

       $arra=array("lisizuo","mahong","gebilaowang","hecheng");

       if(in_array($username,$arra)){
            echo "该用户名已经被注册";
       }else{
            echo "该用户名可以使用";
        }

?>