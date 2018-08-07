<?php
/**
 * 创建者: hyl
 * 创建时间: 2018/8/5 15:48
 * 描述: teacherList.php
 */
header('Content-Type:text/html;charset=utf-8');

if( !isset($_POST["page"]) || !is_numeric($_POST["page"])){
    echo json_encode(array("status" => 1));
    exit;
}

$page = $_POST["page"]; //页数
$length = 5; //每页数据个数

require_once("../models/Database.php");
Database::connect();
require_once("../models/Teacher.php");

$total = (int)Teacher::getTeaCount();//总数
$data = Teacher::getTeaList($page, $length);//获取数据

echo json_encode(
    array(
        "status" => 0,
        "list" => $data,
        "totalPages" => ceil($total / $length)//总页数
    )
);

