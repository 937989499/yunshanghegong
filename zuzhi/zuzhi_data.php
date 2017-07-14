<?php
require '../config.php';
require '../dbcz.php';
	//$thiss = $_GET['ids'];
	$idsd = isset($_POST['id']) ? $_POST['id'] : 0;
	$page = $_POST['page'];
	$pageSize = $_POST['rows'];
	$first = $pageSize * ($page - 1);
	$order = $_POST['order'];
	$sort = $_POST['sort'];

	$sql_1 = "SELECT  id,Name,FId FROM hgc_organizational WHERE FId=$idsd ORDER BY $sort $order LIMIT $first,$pageSize";
	$sql_2 = "SELECT * FROM hgc_organizational";
	//echo "SELECT  id,Name,FId FROM hgc_organizational WHERE id=$idsd ORDER BY $sort $order LIMIT $first,$pageSize";
	$ceshi = new Dbcz();
	$ceshi->Date($sql_1,$sql_2);
	mysql_close();
?>
