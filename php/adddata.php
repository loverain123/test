<?php
//链接前后台的媒人，中间人

function doPost(){
	    $username = $_POST['name'];
		$password = $_POST['password'];
    if($_POST["name"]!=null && $_POST["pwd"]!=null) {
	    		
		$mysqli = new mysqli('localhost', 'root', '', 'login');//链接数据库
		
		$mysqli->query('set names utf8');//设置字符集的编码
		
		$mysqli->query('insert into userlogin(name, pwd) values("'.$username.'", "'.md5($password).'")');
		//往后台的数据库的userlogin表中添加数据
		
		if($mysqli->insert_id > 0) {
			$ret = array('status'=>200, 'info' => '注册成功');
		} else {
			$ret = array('status'=>510, 'info' => '注册失败');
		}
		  $mysqli->close();
	}
		echo json_encode($ret);
}
doPost();