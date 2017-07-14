<?php
	require '../config.php';
	require '../dbcz.php';
		$sql1 = "SELECT  id,Name AS text FROM hgc_organizational";
		$ceshi = new Dbcz();
		$ceshi->Get($sql1);
		mysql_close();
?>