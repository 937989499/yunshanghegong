<?php
	require '../config.php';
	require '../dbcz.php';

	$id = $_POST['id'];
	// $sql = mysql_query() or die('SQL错误');
	// $json = '';
	// while (!!$row=mysql_fetch_array($sql,MYSQL_ASSOC)) {
	// 		$json.=json_encode($row).",";
	// }
	// $json = substr($json, 0,-1);
	// echo '['.$json.']';
	// mysql_close();
	$sql="SELECT  id,Name,Type,Url AS url,IconCls,btnAdd,PId,FId FROM hgc_mokuai WHERE id='$id'";
	$ceshi = new Dbcz();
	$ceshi->Get($sql);
?>
