
<?php
	require '../config.php';
	require '../dbcz.php';
	$sql = "SELECT  id FROM hgc_check";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
?>