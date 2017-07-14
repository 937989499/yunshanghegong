<?php
require '../../config.php';
require '../../dbcz.php';
$uid = $_POST['uid'];
$mid = $_POST['mid'];

$sql = "INSERT INTO hgc_usermokuai (U_Id,M_Id) VALUES ('$uid','$mid')";
	$ceshi = new Dbcz();
	$ceshi->AddDeleUp($sql);
?>