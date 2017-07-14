
<?php
	require '../config.php';
	require '../dbcz.php';
	$sql = "SELECT  CheckStyle FROM hgc_check";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
?>