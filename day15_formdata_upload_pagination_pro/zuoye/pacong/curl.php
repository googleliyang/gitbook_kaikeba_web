<?php
    function vpost($url, $param, $cookie = null){ // 模拟提交数据函数
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检查
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2); // 从证书中检查SSL加密算法是否存在
        curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
        curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
        curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
        if(isset($cookie)){
            $headers[] = $cookie;
            curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);//设置cookie模拟登陆状态
        }
        curl_setopt($curl, CURLOPT_POSTFIELDS, $param); // Post提交的数据包
        curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
        $tmpInfo = curl_exec($curl); // 执行操作
        //$tmpInfo = mb_convert_encoding($tmpInfo, "utf-8", "gbk");
        if (curl_errno($curl)) {
            echo 'Errno'.curl_error($curl);//捕抓异常
        }
        curl_close($curl); // 关闭CURL会话
        return $tmpInfo; // 返回数据
    }
    if (isset($_POST["user"])) {
        $user = $_POST["user"];
    } else {
        echo json_encode(array(
            "code" => 0,
            "info" => "参数有误！"
        ));
        return false;
    }
    if (isset($_POST["pwd"])) {
        $pwd = $_POST["pwd"];
    } else {
        echo json_encode(array(
            "code" => 0,
            "info" => "参数有误！"
        ));
        return false;
    }
    //设置爬虫路径
    $url = "http://www.bjguahao.gov.cn/quicklogin.htm";
    //设置参数
    $param = "mobileNo=".$user."&password=".$pwd."&yzm=&isAjax=true";
    //设置密码
    $output = vpost($url, $param);


    echo json_encode(array(
        "code" => 1,
        "info" => $output
    ));
?>
