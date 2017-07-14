<?php
	require '../config.php';
	require '../dbcz.php';

	$ids = $_POST['ids'];
	
	$ceshi = new Dbcz();
	$sql = "DELETE FROM hgc_organizational WHERE id IN($ids)";
	$ceshi->AddDeleUp($sql);
	mysql_close();
?>