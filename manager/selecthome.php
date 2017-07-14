<?php
	require '../config.php';
	$id = $_GET['id'];
	$query = mysql_query("SELECT HId AS id FROM hgc_home WHERE LouId=$id");

	$json = '';

	while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		$json .= json_encode($row).',';
	}

	$json = substr($json, 0, -1);
	echo '['.$json.']';
	mysql_close();
?>