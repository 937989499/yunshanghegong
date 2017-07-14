
<?php
require '../../config.php';

$id = $_GET['ids'];

$page = $_POST['page'];
$pageSize = $_POST['rows'];
$first = $pageSize * ($page - 1);
$order = $_POST['order'];
$sort = $_POST['sort'];

$query = mysql_query("SELECT

(SELECT HId FROM hgc_home WHERE id = b.H_Id) AS dromnum,
(SELECT UserName FROM hgc_person WHERE id = b.P_Id) AS userName,
a.CheckStyle,b.CheckDate FROM hgc_checkcong AS a JOIN hgc_checkmind AS b ON a.Cm_Id = b.id
 where (SELECT O_Id FROM hgc_home WHERE id = b.H_Id) ='$id'
");

$json = '';
while (!!$row=mysql_fetch_array($query,MYSQL_ASSOC)) {
     $json .=json_encode($row).',';
}
$json =substr($json,0,-1);
echo '['.$json.']';
mysql_close();
?>