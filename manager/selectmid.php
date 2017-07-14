<?php
	require '../config.php';
	require '../dbcz.php';
	$sql = "SELECT  id FROM hgc_mokuai";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
?>