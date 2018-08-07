<?php


       $currentPage=$_GET["currentPage"]; //1,2,3,4,5
       $pageSize=$_GET["pageSize"];  //10


         //给客户端一个响应头，响应json 格式的数据.
       header('Content-Type:text/html;charset=utf-8');
        //连接数据库 得到连接
       $con = mysql_connect("127.0.0.1","root","");
       if (!$con){
           die('Could not connect: ' . mysql_error());
       }
        //连接那个数据库  pdj 数据
        mysql_select_db("huike", $con);
        $start=($currentPage-1)*$pageSize;
        $sql="select * from teacher order by id desc limit ".$start.",".$pageSize;
        $result = mysql_query($sql);
        $list = array();
        while($row = mysql_fetch_array($result)){
            $item = array(
                'id' => $row['id'],
                'username' => $row['username'],
                'telephone' => $row['age'],
                'age' => $row['age'],
                'lifePhoto' => $row['lifePhoto'],
                't_desc' => $row['t_desc']
            );
            //往数组里面添加一条记录.
            array_push($list,$item);
        }

        $sql1="select count(*) as account from teacher";

        $result1 = mysql_query($sql1);

        $total=0;
        if($row1=mysql_fetch_array($result1)){
            $total=$row1['account'];
        }

        $obj=array("rows"=>$list,"total"=>$total);
        echo json_encode($obj);
        mysql_close($con);
?>