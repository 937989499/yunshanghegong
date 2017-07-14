<?php
require '../config.php';
require '../dbcz.php';

	$page = $_POST['page'];
	$pageSize = $_POST['rows'];
	$first = $pageSize * ($page - 1);
	$order = $_POST['order'];
	$sort = $_POST['sort'];
	$lou = $_POST['lou'];
	$fang = $_POST['fang'];
	$sql_1 = "SELECT a.id,a.LouId,a.HId,(CASE HType WHEN HType='1' THEN '宿舍' ELSE '教室' END) AS HType,b.Name,c.UserName FROM hgc_home AS a,hgc_organizational AS b,hgc_fudao AS c WHERE a.O_Id=b.id AND a.Fd_Id=c.id ORDER BY $sort $order LIMIT $first,$pageSize";
	$sql2 = "SELECT * FROM hgc_home";
	if (!isset($_POST['lou']) && !isset($_POST['fang'])) {
		$ceshi = new Dbcz();
		$ceshi->Date($sql_1,$sql2);
	}
	else{
		if (isset($_POST['fang']) && $_POST['fang']!='' && isset($_POST['lou']) && $_POST['lou']!='') {
				$query = mysql_query("SELECT a.id,a.LouId,a.HId,(CASE HType WHEN HType='1' THEN '宿舍' ELSE '教室' END) AS HType,b.Name,c.UserName FROM hgc_home AS a,hgc_organizational AS b,hgc_fudao AS c WHERE a.O_Id=b.id AND a.Fd_Id=c.id  AND a.HId='$fang' AND a.LouId='$lou' ORDER BY $sort $order LIMIT $first,$pageSize") or die('SQL 错误！');
		    	$total = mysql_num_rows(mysql_query($sql2));
				$json = '';

				while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
					$json .= json_encode($row).',';
				}

				$json = substr($json, 0, -1);
				echo '{"total" : '.$total.', "rows" : ['.$json.']}';
			}
		else{
		if ($_POST['lou']) {
			$query = mysql_query("SELECT a.id,a.LouId,a.HId,(CASE HType WHEN HType='1' THEN '宿舍' ELSE '教室' END) AS HType,b.Name,c.UserName FROM hgc_home AS a,hgc_organizational AS b,hgc_fudao AS c WHERE a.O_Id=b.id AND a.Fd_Id=c.id AND a.LouId='$lou'  ORDER BY $sort $order LIMIT $first,$pageSize") or die('SQL 错误！');
	    	$total = mysql_num_rows(mysql_query($sql2));
			$json = '';

			while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
				$json .= json_encode($row).',';
			}

			$json = substr($json, 0, -1);
			echo '{"total" : '.$total.', "rows" : ['.$json.']}';
		}
		if ($_POST['fang']) {
			$query = mysql_query("SELECT a.id,a.LouId,a.HId,(CASE HType WHEN HType='1' THEN '宿舍' ELSE '教室' END) AS HType,b.Name,c.UserName FROM hgc_home AS a,hgc_organizational AS b,hgc_fudao AS c WHERE a.O_Id=b.id AND a.Fd_Id=c.id  AND a.HId='$fang' ORDER BY $sort $order LIMIT $first,$pageSize") or die('SQL 错误！');
		    $total = mysql_num_rows(mysql_query($sql2));
			$json = '';

			while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
				$json .= json_encode($row).',';
			}

			$json = substr($json, 0, -1);
			echo '{"total" : '.$total.', "rows" : ['.$json.']}';
		}
	}	
}
?>
