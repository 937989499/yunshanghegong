<?php
	require '../../config.php';
	require '../../dbcz.php';
	$id = $_POST['us'];
	$users = $_POST['usersedit'];
	// mysql_query() or die('SQL 错误！');
	// echo mysql_affected_rows();
	// mysql_close();
	// UPDATE `hgc_users` SET `Name` = '66' WHERE `hgc_users`.`Id` =
	$sql= "UPDATE hgc_users SET Name = '$users' WHERE id=$id";
	// echo "UPDATE hgc_users SET Name = '$users' WHERE id=$id";
	$ceshi = new Dbcz();
	$ceshi->AddDeleUp($sql);
	
?>
