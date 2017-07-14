<?php
	require '../config.php';
	require '../dbcz.php';

	$oname = $_POST['oname'];
	$ofid = $_POST['ofid'];
	$ostate = $_POST['ostate'];
	$otype = $_POST['otype'];
	$ceshi = new Dbcz();
	$sql = "INSERT INTO hgc_organizational (Name,FId,state,Type) VALUES ('$oname','$ofid','$ostate','$otype')";
	$ceshi->AddDeleUp($sql);
	mysql_close();
?>