<?php
	require '../config.php';
	require '../dbcz.php';

	$manager = $_POST['name'];
	$password = $_POST['type'];
	$truename = $_POST['url'];
	$oid = $_POST['iconcls'];
	$uid = $_POST['btnadd'];
	$cancheck = $_POST['pid'];
	$cancheck2 = $_POST['fid'];

	$ceshi = new Dbcz();
	$sql = "INSERT INTO hgc_mokuai (Name,Type,Url,IconCls,btnAdd,PId,FId) VALUES ('$manager','$password','$truename','$oid','$uid','$cancheck','$cancheck2')";
	$ceshi->AddDeleUp($sql);
	mysql_close();
?>
