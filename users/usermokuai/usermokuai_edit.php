
<?php
	require '../../config.php';
	require '../../dbcz.php';
	$id = $_POST['uids'];
	$uid = $_POST['uidedit'];
	$mid = $_POST['midedit'];
	$sql="UPDATE hgc_usermokuai SET U_Id='$uid',M_Id='$mid' WHERE id='$id'";
	// echo"UPDATE hgc_users SET U_Id='$uid',M_Id='$mid' WHERE Id=$id";
	$ceshi = new Dbcz();
	$ceshi->AddDeleUp($sql);
?>
