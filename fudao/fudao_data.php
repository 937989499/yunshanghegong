<?php
require '../config.php';
require '../dbcz.php';

$page = $_POST['page'];
$pageSize = $_POST['rows'];
$first = $pageSize * ($page - 1);
$order = $_POST['order'];
$sort = $_POST['sort'];

$sql_1 = "SELECT  a.id,a.UserName,a.TrueName,b.Name FROM hgc_fudao AS a join hgc_organizational AS b WHERE a.O_Id=b.id ORDER BY $sort $order LIMIT $first,$pageSize";
$sql_2 = "SELECT * FROM hgc_fudao";

$ceshi = new Dbcz();
$ceshi->Date($sql_1,$sql_2);
?>
