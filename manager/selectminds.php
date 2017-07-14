<?php
	require '../config.php';
	require '../dbcz.php';

	$id = $_GET['id'];

	$sql = "SELECT id,CheckStyle AS text  FROM hgc_checkmind WHERE id=$id";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
?>