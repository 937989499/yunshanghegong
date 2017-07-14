
<?php
	require '../config.php';
	require '../dbcz.php';
	$sql = "SELECT  id FROM hgc_fudao";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
?>
