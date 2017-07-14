<?php
require 'config.php';
session_start();

	$admin = $_SESSION['admin'];
	$pwd = $_SESSION['pwd'];

	header('Content-Type: text/html; charset=utf-8');
	$Uid=mysql_query("SELECT U_Id AS id  FROM hgc_person WHERE UserName='$admin' AND Password='$pwd' LIMIT 1")or die('SQL 错误2！');
	$Uidarr= array();
	while ($Uidck=mysql_fetch_array($Uid, MYSQL_ASSOC)) {
		$Uidarr[] = $Uidck;
	};
	$uidm=implode(",",$Uidarr[0]);
	$Mid=mysql_query("SELECT M_Id FROM hgc_usermokuai WHERE U_Id=$uidm")or die('SQL 错误3！');
	
	while ($Midck=mysql_fetch_array($Mid, MYSQL_ASSOC)) {
		$Midarr[]= $Midck;
	}
	$string = "";
	for ($i=0; $i < count($Midarr); $i++) {
		$string=$string.",".$Midarr[$i]['M_Id'];
	}
	$srt=ltrim($string,",");
	
	$arrsry = explode(",",$srt);
	
	$mokarr = array();
	$id = isset($_GET['id']) ? $_GET['id'] : 0;
	
	foreach ($arrsry as $key=>$val) {
		$sqll="SELECT id,Name AS text FROM hgc_mokuai  WHERE  btnAdd='btnAdd' AND id=$val";
		$results=mysql_query($sqll) or die('SQL 4错误！');
		$Mcc=mysql_fetch_assoc($results);
		$mokarr[]= $Mcc; 
	}
	$newArr=array_filter($mokarr);
	$arrchong=array_merge($newArr);
	$rowdsm=array_column($arrchong,'text','id');
	?>