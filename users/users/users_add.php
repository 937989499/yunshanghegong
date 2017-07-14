<?php
require '../../config.php';
require '../../dbcz.php';
	$manager = $_POST['users'];
	$sql ="INSERT INTO hgc_users (Name) VALUES ('$manager')";
	$ceshi = new Dbcz();
	$ceshi->AddDeleUp($sql);
?>