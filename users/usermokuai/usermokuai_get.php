<?php	
	require '../../config.php';
	require '../../dbcz.php';
	$id = $_POST['id'];
	$sqll ="SELECT  id,U_Id,M_Id FROM hgc_usermokuai WHERE id='$id'"; 
	$ceshi = new Dbcz();
	$ceshi->Get($sqll);
?>