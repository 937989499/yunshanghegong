<?php
	require '../config.php';
	require '../dbcz.php';
	$page = $_POST['page'];
	$pageSize = $_POST['rows'];
	$first = $pageSize * ($page - 1);

	$order = $_POST['order'];
	$sort = $_POST['sort'];

	$sql_1 = "SELECT id,Name,(CASE Type WHEN Type='1' THEN '菜单' ELSE '按钮' END) AS Type,Url AS url,IconCls,btnAdd,PId,FId FROM hgc_mokuai WHERE btnAdd='0' ORDER BY $sort $order LIMIT $first,$pageSize";
	$sql_2 = "SELECT * FROM hgc_mokuai";
	$ceshi = new Dbcz();
	$ceshi->Date($sql_1,$sql_2);
?>
