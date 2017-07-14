<?php
require '../../config.php';

header('Content-Type: text/html; charset=utf-8');

$page = $_POST['page'];
$pageSize = $_POST['rows'];
$first = $pageSize * ($page - 1);
$order = $_POST['order'];
$sort = $_POST['sort'];


$query = mysql_query("SELECT
  (SELECT Name from hgc_organizational WHERE id=b.O_Id) as name,
  (SELECT Name from hgc_organizational WHERE id=b.Sch_Id) AS orgName,
  b.ScH_Id,sum(a.CheckStyle=1) AS ycount,sum(a.CheckStyle=3) AS ccount FROM hgc_checkmind AS a JOIN hgc_home AS b
  ON a.H_Id = b.id WHERE (SELECT Type FROM hgc_organizational WHERE id=b.Sch_Id) IN (SELECT Type FROM hgc_organizational WHERE Type='班级') GROUP BY b.Sch_Id");


$json = '';

while (!!$row=mysql_fetch_array($query,MYSQL_ASSOC)) {
     $json .=json_encode($row).',';
}
$json =substr($json,0,-1);
echo '['.$json.']';
mysql_close();

?>