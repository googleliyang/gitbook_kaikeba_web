<?php
/**
 * 创建者: hyl
 * 创建时间: 2018/7/19 15:49
 * 描述: database.php
 */
class Database{
    public function __construct(){}

    static public $db = null;
    static public function connect(){
        $dsn = 'mysql:dbname=test;host=localhost;port=3306';
        $username = 'root';
        $password = '';
        if(!Database::$db){
            try {
                Database::$db = new PDO($dsn, $username, $password);
            } catch(PDOException $e) {
                die('连接数据库失败');
            }
        }
    }
}