<?php
	session_start();
	require 'config.php';

	$manager = $_POST['manager'];
	$password = $_POST['password'];

	$query = mysql_query("SELECT * FROM hgc_person WHERE UserName='$manager' AND Password='$password' AND auth='1' LIMIT 1") or die('SQL 错误！');
	if (!!mysql_fetch_array($query, MYSQL_ASSOC)) {
		$_SESSION['admin'] = $manager;
		$_SESSION['pwd'] = $password;
		echo 1;
	} else {
		echo 0;
	}
?>
