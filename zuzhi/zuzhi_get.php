<?php
	require '../config.php';
	require '../dbcz.php';

	$id = $_POST['id'];
	$sql="SELECT  id,Name AS text,FId,state,type FROM hgc_organizational WHERE id='$id'";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
	mysql_close();
?>