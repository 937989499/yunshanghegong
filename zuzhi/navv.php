<?php
	require '../config.php';

	header('Content-Type: text/html; charset=utf-8');

	$id = isset($_POST['id']) ? $_POST['id'] : 0;

	$query = mysql_query("SELECT id,Name AS text,FId,state FROM hgc_organizational WHERE FId=$id") or die('SQL 错误！');
	// $json = '';
	$result =array(); 
	while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
		$node = array();
		$node['id'] = $row['id'];
		$node['text'] = $row['text'];
		// $node['url'] = $row['url'];
		$node['state'] = $row['state'];
		array_push($result,$node);
	}
	echo json_encode($result);
	// function has_child($id){
	// 	$rs = mysql_query("select FId from hgc_organizational where FId=$id");
	// 	$row = mysql_fetch_array($rs);
	// 	return $row[0] > 0 ? true : false;
	// }
	// $json = substr($json, 0, -1);
	// echo '['.$json.']';
	mysql_close();
?>
