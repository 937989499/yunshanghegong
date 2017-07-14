<?php
	require '../config.php';

		$page = $_POST['page'];
		$pageSize = $_POST['rows'];
		$first = $pageSize * ($page - 1);

		$order = $_POST['order'];
		$sort = $_POST['sort'];

	if (!isset($_POST['name'])) {
		$query = mysql_query("SELECT a.id,a.UserName,a.TrueName,b.Name,c.Name AS UName,(CASE QiYong WHEN QiYong='1' THEN '启用' ELSE '禁用' END) AS QiYong FROM hgc_person AS a,hgc_organizational AS b,hgc_users AS c WHERE a.O_Id=b.id AND a.U_Id=c.id  ORDER BY $sort $order LIMIT $first,$pageSize") or die('SQL 错误！');
		$total = mysql_num_rows(mysql_query("SELECT * FROM hgc_person"));

		$json = '';

		while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
			$json .= json_encode($row).',';
		}

		$json = substr($json, 0, -1);
		echo '{"total" : '.$total.', "rows" : ['.$json.']}';
	}
	else{
		$name = $_POST['name'];
		$query = mysql_query("SELECT a.id,a.UserName,a.TrueName,b.Name,c.Name AS UName,(CASE QiYong WHEN QiYong='1' THEN '启用' ELSE '禁用' END) AS QiYong FROM hgc_person AS a,hgc_organizational AS b,hgc_users AS c WHERE a.O_Id=b.id AND a.U_Id=c.id AND a.UserName='$name'  ORDER BY $sort $order LIMIT $first,$pageSize") or die('SQL n错误！');
		$total = mysql_num_rows(mysql_query("SELECT * FROM hgc_person"));
		$json = '';

		while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
			$json .= json_encode($row).',';
		}

		$json = substr($json, 0, -1);
		echo '{"total" : '.$total.', "rows" : ['.$json.']}';
	}
	
	mysql_close();
?>
