<?php
	require '../config.php';
	require '../dbcz.php';
	$sql = "SELECT  id FROM hgc_home";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
?>