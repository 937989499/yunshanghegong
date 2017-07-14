<?php
require '../../config.php';
require '../../dbcz.php';
	$page = $_POST['page'];
	$pageSize = $_POST['rows'];
	$first = $pageSize * ($page - 1);
	$order = $_POST['order'];
	$sort = $_POST['sort'];
	$sql_1 = "SELECT  id,Name FROM hgc_users ORDER BY $sort $order LIMIT $first,$pageSize";
	$sql_2 = "SELECT * FROM hgc_users";
	$ceshi =new Dbcz();
	$ceshi->Date($sql_1,$sql_2);
?>