<?php
	require '../config.php';
	
	$ids = $_POST['ids'];
	
	mysql_query("DELETE FROM hgc_person WHERE id IN($ids)") or die('SQL 错误！');

	echo mysql_affected_rows();
	
	mysql_close();
?>