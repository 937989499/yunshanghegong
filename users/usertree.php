<?php
require '../config.php';//确定服务，业务推演。RCT
require '../dbcz.php';

$ceshi = new Dbcz();
// $sql="SELECT id,Name AS text FROM hgc_mokuai";
// $ceshi->Get($sql);

// $id = $_GET['Id'];
// $rows=mysql_query("SELECT * FROM hgc_usermokuai WHERE U_Id=$id");
// if (!!$rowd=mysql_fetch_array($rows)){
// 	// $sql3="DELETE FROM hgc_usermokuai WHERE U_Id=$id";
// 	// mysql_query($sql3) or die('SQL 错误！');
// 	$sql="SELECT id,Name AS text FROM hgc_mokuai";
// 	$ceshi->Get($sql);
// 	return $rowd;
// 	mysql_close();
// }
// else{
	$sql2="SELECT id,Name AS text FROM hgc_mokuai";
	$sql = mysql_query($sql2) or die('SQL错误');
    $json = '';
    while (!!$row=mysql_fetch_array($sql,MYSQL_ASSOC)) {
        $json.=json_encode($row).",";
    }
    $json = substr($json, 0,-1);
    echo '['.$json.']';
    mysql_close();
// }

?>