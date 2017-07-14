<?php
require '../config.php';
require '../dbcz.php';

	$id = $_POST['zuzhis'];
	$oname = $_POST['oname_edit'];
	$ofid = $_POST['ofid_edit'];
	$ostate = $_POST['ostate_edit'];
	$otype = $_POST['otype_edit'];

$sql = "UPDATE hgc_organizational SET Name='$oname',FId='$ofid',state='$ostate',type='$otype' WHERE id=$id";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
mysql_close();
?>