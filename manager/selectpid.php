<?php
	require '../config.php';
	require '../dbcz.php';
	$sql = "SELECT  id FROM hgc_person";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
?>