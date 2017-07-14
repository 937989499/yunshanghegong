<?php
require '../../config.php';

$id = $_GET['idse'];

$page = $_POST['page'];
$pageSize = $_POST['rows'];
$first = $pageSize * ($page - 1);
$order = $_POST['order'];
$sort = $_POST['sort'];

$query = mysql_query("SELECT 
(SELECT TrueName from hgc_fudao WHERE Id=b.Fd_Id) AS username,
(SELECT CheckStyle from hgc_checkcong WHERE Cm_Id=a.id) as checkstyle,
b.Sch_Id,b.HId as hid,a.CheckDate as checkdate FROM hgc_checkmind AS a JOIN hgc_home AS b 
ON a.H_Id = b.id
 where b.Fd_Id ='$id'
");

$json = '';
while (!!$row=mysql_fetch_array($query,MYSQL_ASSOC)) {
     $json .=json_encode($row).',';
}
$json =substr($json,0,-1);
echo '['.$json.']';
mysql_close();
?>