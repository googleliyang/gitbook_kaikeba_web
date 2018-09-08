<?php
/**
 * 创建者: hyl
 * 创建时间: 2018/8/5 10:20
 * 描述: Teacher.php
 */
require_once("Database.php");
class Teacher{
    public function __construct(){}

    static public function getTeaCount(){
        $statement = "SELECT count(1) as `num`
                      FROM `teacher`
                      LIMIT 1";

        $prepare = Database::$db->prepare($statement);

        if( $prepare->execute() ){
            $row = $prepare->fetch(PDO::FETCH_ASSOC);
            return $row["num"];
        }else{
            return 0;
        }
    }

    static public function getTeaList($page, $length){
        Database::connect();

        $start = ($page - 1) * $length;
        $statement = "SELECT `name`, age, img, hobbies
                      FROM `teacher`
                      limit {$start}, {$length}";

        $prepare = Database::$db->prepare($statement);

        $data = array();
        if( $prepare->execute() ){
            while ($row = $prepare->fetch(PDO::FETCH_ASSOC))
                $data[] = $row;
        }

        return $data;
    }
}