<?php
	require '../config.php';

	// $manager = $_POST['manager_edit'];
	$password = $_POST['password_edit'];
	$id = $_POST['manid'];
	$truename = $_POST['truename_edit'];
	$oid = $_POST['oid_edit'];
	$uid = $_POST['uid_edit'];
	$auth = $_POST['auth_edit'];

	if (!empty($_POST['password_edit'])) {
		// echo "UPDATE hgc_person SET PassWord='$password',TrueName='$truename',O_Id='$oid',U_Id='$uid',CanCheck='$canchecked',QiYong='$auth' WHERE id=$id";
		mysql_query("UPDATE hgc_person SET PassWord='$password',TrueName='$truename',O_Id='$oid',U_Id='$uid',QiYong='$auth' WHERE id=$id") or die('SQL 错误！');
	} else {
		mysql_query("UPDATE hgc_person SET QiYong='$auth' WHERE id='$id'") or die('SQL 错误！');
	}

	echo mysql_affected_rows();

	mysql_close();
?>
