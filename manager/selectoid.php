<?php
	require '../config.php';
	require '../dbcz.php';
		$sql1 = "SELECT  id,Name AS text FROM hgc_organizational";
		$ceshi = new Dbcz();
		$ceshi->Get($sql1);
	// if ($idss==2) {
	// 	$sql2 = "SELECT  id FROM hgc_users";
	// 	$ceshi = new Dbcz();
	// 	$ceshi->Get($sql2);
	// }
	// if ($idss==3) {
	// 	$sql = "SELECT  id FROM hgc_person";
	// 	$ceshi = new Dbcz();
	// 	$ceshi->Get($sql);
	// }
	// if ($idss==4) {
	// 	$sql = "SELECT  id FROM hgc_mokuai";
	// 	$ceshi = new Dbcz();
	// 	$ceshi->Get($sql);
	// }
	// if ($idss==5) {
	// 	$sql = "SELECT  CheckStyle FROM hgc_check";
	// 	$ceshi = new Dbcz();
	// 	$ceshi->Get($sql);
	// }
	// if ($idss==6) {
	// 	$sql = "SELECT  id FROM hgc_checkmind";
	// 	$ceshi = new Dbcz();
	// 	$ceshi->Get($sql);
	// }
	// if ($idss==7) {
	// 	$sql = "SELECT  id FROM hgc_check";
	// 	$ceshi = new Dbcz();
	// 	$ceshi->Get($sql);
	// }
	// if ($idss==8) {
	// 	$sql = "SELECT  id FROM hgc_fudao";
	// 	$ceshi = new Dbcz();
	// 	$ceshi->Get($sql);
	// }
	// if ($idss==9) {
	// 	$sql = "SELECT  id FROM hgc_home";
	// 	$ceshi = new Dbcz();
	// 	$ceshi->Get($sql);
	// }
	mysql_close();
?>