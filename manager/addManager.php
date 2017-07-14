<?php
	require '../config.php';
	require '../dbcz.php';
	$manager = $_POST['manager'];
	$password = $_POST['password'];
	$truename = $_POST['truename'];
	$oid = $_POST['oid'];
	$uid = $_POST['uid'];
	$auth = $_POST['auth'];
	
	mysql_query("INSERT INTO hgc_person (UserName,PassWord,TrueName,O_Id,U_Id,QiYong) VALUES ('$manager','$password','$truename','$oid','$uid','$auth')") or die('SQL 错误！');
	//echo "INSERT INTO hgc_person (UserName,PassWord,TrueName,O_Id,U_Id,QiYong) VALUES ('$manager','$password','$truename','$oid','$uid','$auth')";
	echo mysql_affected_rows();
	
	mysql_close();
?>