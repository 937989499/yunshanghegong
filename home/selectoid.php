<?php
	require '../config.php';
	require '../dbcz.php';
		$sql1 = "SELECT  id FROM hgc_organizational";
		$ceshi = new Dbcz();
		$ceshi->Get($sql1);
?>