<?php
require '../config.php';

$mid = $_POST['idms'];
$uid = $_POST['uids'];
$arr = explode(",",$mid);
if (isset($uid)) {
	$sql3="DELETE FROM hgc_usermokuai WHERE U_Id=$uid";
	$rs=mysql_query($sql3) or die('SQL 错误！');

	foreach ($arr as $key) {
		mysql_query("INSERT INTO hgc_usermokuai SET M_Id=$key,U_Id=$uid ") or die('SQL 错误！');
	}
	echo mysql_affected_rows();
}
else{
	foreach ($arr as $key) {
		mysql_query("INSERT INTO hgc_usermokuai SET M_Id=$key,U_Id=$uid ") or die('SQL 错误！');
	}
	echo mysql_affected_rows();
}

mysql_close();


?>