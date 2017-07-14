<?php
	require '../../config.php';
	require '../../dbcz.php';
	$id = $_POST['tid'];
	$sqll ="SELECT M_Id FROM hgc_usermokuai WHERE U_Id='$id'"; 
	$ceshi = new Dbcz();
	$ceshi->Get($sqll);  
?>