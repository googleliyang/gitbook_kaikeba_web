<?php 
	header("Content-Type:text/html;charset=utf-8");
	$requestAction = $_REQUEST['action'];
	$dataAccess = new DataAccess('127.0.0.1','ROOT','','test');
	switch ($requestAction)
	{
		case 'login':
			$sql = "SELECT * FROM user where userName='$_POST[userName]' and password='$_POST[password]'" ;
			$userId = '';
			$response = $dataAccess->Execute($sql);
			if($response->num_rows!=null){
				while($row = mysqli_fetch_array($response))
				{
					$userId=$row['userId'];
					break;
				}
				$sql = "SELECT * FROM token where userId=".$userId ;
				$response = $dataAccess->Execute($sql);
				$token = md5($userId.time());
				if($response->num_rows!=null){
					$sql = "UPDATE token SET token='".$token."',expireTime='".time()."' where userId=".$userId;
				}else{
					$sql = "INSERT INTO token (userId, token, expireTime) VALUES (".$userId.",'".$token."',".time().")";
				}
				if($dataAccess->Execute($sql)==true)
				{
					//echo $token;
					header('refresh:0;url="index.html?token='.$token.'"');
				}
			}else{
				echo "<script>alert('账号或密码错误')</script>";
				header('refresh:0;url="login.html"');
			}
			break;
		case 'insert':
			checkToken($dataAccess);
			$sql = "INSERT INTO person (pname, birthYear) VALUES ('$_POST[pname]','$_POST[birthYear]')";
			if($dataAccess->Execute($sql)==true)
			{
				echo "<script>alert('新增成功')</script>";
				header('refresh:0;url="index.html"');
			}
			break;
		case 'show':
			checkTokenEx($dataAccess);
			$sql = "SELECT * FROM person";
			$list = array();
			$response = $dataAccess->Execute($sql);
			while($row = mysqli_fetch_array($response))
			{
				$item = array(
					'pid' => $row['pid'],
					'pname' => $row['pname'],
					'birthYear' => $row['birthYear']
				);
        		//往数组里面添加一条记录.
				array_push($list,$item);
			}
			exit(json_encode($list));
			break;
		case 'select':
			checkTokenEx($dataAccess);
			$sql = "SELECT * FROM person where pid=$_REQUEST[pid]";
			$list = array();
			$response = $dataAccess->Execute($sql);
			while($row = mysqli_fetch_array($response))
			{
				$item = array(
					'pid' => $row['pid'],
					'pname' => $row['pname'],
					'birthYear' => $row['birthYear']
				);
        		//往数组里面添加一条记录.
				array_push($list,$item);
			}
			exit(json_encode($list));
			break;
		case 'edit':
			checkToken($dataAccess);
			$sql = "UPDATE person SET pname='$_POST[pname]',birthYear='$_POST[birthYear]' where pid='$_POST[pid]'";
			if($dataAccess->Execute($sql)==true)
			{
				echo "<script>alert('修改成功')</script>";
				header('refresh:0;url="index.html"');
			}
			break;
		case 'delete':
			checkToken($dataAccess);
			$sql = "DELETE FROM person where pid=$_REQUEST[pid]";
			if($dataAccess->Execute($sql)==true)
			{
				echo "<script>alert('删除成功')</script>";
				header('refresh:0;url="index.html"');
			}
			break;
	}
	
	function checkToken($dataAccess){
			if(!$_REQUEST['token']){
				echo "<script>alert('您未登录，请登录')</script>";
				header('refresh:0;url="login.html"');
				break;
			}

			$sql = "SELECT expireTime FROM token where token='$_REQUEST[token]'";
			$response = $dataAccess->Execute($sql);
			$expireTime=0;
			while($row = mysqli_fetch_array($response))
			{
				$expireTime=$row['expireTime'];
				break;
			}
			if(time()>$expireTime+7200){
				echo "<script>alert('您长时间未操作，请重新登录！')</script>";
				header('refresh:0;url="login.html"');
				break;
			}
			$sql = "UPDATE token SET expireTime='".time()."' where token='$_REQUEST[token]'";
			$dataAccess->Execute($sql);
	}

	function checkTokenEx($dataAccess){
			if(!$_REQUEST['token']){
				$item = array(
					'state' => 0,
					'Msg' => '您未登录，请登录！'
				);
				exit(json_encode($item)); 
				break;
			}

			$sql = "SELECT expireTime FROM token where token='$_REQUEST[token]'";
			$response = $dataAccess->Execute($sql);
			$expireTime=0;
			while($row = mysqli_fetch_array($response))
			{
				$expireTime=$row['expireTime'];
				break;
			}
			if(time()>$expireTime+7200){
				$item = array(
					'state' => 0,
					'Msg' => '您长时间未操作，请重新登录！'
				);
				exit(json_encode($item)); 
				break;
			}
			$sql = "UPDATE token SET expireTime='".time()."' where token='$_REQUEST[token]'";
			$dataAccess->Execute($sql);
	}

	/**
	 * 数据连接操作
	 */
	class DataAccess
	{
		var $conn;
		var $serverName;
		var $userName;
		var $password;
		var $dbName;

		function __construct($server,$user,$psw,$db)
		{
			$this->serverName = $server;
			$this->userName = $user;
			$this->password = $psw;
			$this->dbName = $db;
		}

		function getConn()
		{
			$this->conn = new mysqli($this->serverName,$this->userName,$this->password,$this->dbName);
				if($this->conn->connect_error){
					die('打开连接失败'.$conn->connect_error);
				}
			return $this->conn;
		}

		function Execute($sql)
		{
			$con = $this->getConn();
			$result = $con->query($sql);
			mysqli_close($con);
			return $result;
		}
	}
?>