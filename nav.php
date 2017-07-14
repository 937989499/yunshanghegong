<?php
	require 'config.php';
	session_start();

	$admin = $_SESSION['admin'];
	$pwd = $_SESSION['pwd'];

	header('Content-Type: text/html; charset=utf-8');

	$id = isset($_POST['id']) ? $_POST['id'] : 0;


	$Uid=mysql_query("SELECT U_Id AS id  FROM hgc_person WHERE UserName='$admin' AND Password='$pwd' LIMIT 1")or die('SQL 错误2！');
	$Uidarr= array();
	while ($Uidck=mysql_fetch_array($Uid, MYSQL_ASSOC)) {
		$Uidarr[] = $Uidck;
	};
	$uidm=implode(",",$Uidarr[0]);//数组转换为字符串
	$Mid=mysql_query("SELECT M_Id FROM hgc_usermokuai WHERE U_Id=$uidm")or die('SQL 错误3！');
	
	while ($Midck=mysql_fetch_array($Mid, MYSQL_ASSOC)) {
		$Midarr[]= $Midck;
	}
	$string = "";
	for ($i=0; $i < count($Midarr); $i++) {
		$string=$string.",".$Midarr[$i]['M_Id'];
	}
	$srt=ltrim($string,",");//去掉开头的逗号
	
	$arrsry = explode(",",$srt);//字符串转换为数组
	
	$mokarr = array();
	
	foreach ($arrsry as $key=>$val) {
		$sqll="SELECT id,Name AS text,Url AS url,PId,FId,state FROM hgc_mokuai  WHERE FId=$id AND btnAdd='0' AND id=$val";
		$results=mysql_query($sqll) or die('SQL 4错误！');
		$Mcc=mysql_fetch_assoc($results);
		$mokarr[]= $Mcc; 
	}
	$newArr=array_filter($mokarr);//array_filter() 函数用回调函数过滤数组中的值

	$result =array(); 
	for ($j=0; $j <count($newArr) ; $j++) { 
		$node = array();
		$node['id'] = $newArr[$j]['id'];
		$node['text'] = $newArr[$j]['text'];
		$node['url'] = $newArr[$j]['url'];
		$node['state'] =$newArr[$j]['state'];
		array_push($result,$node);
	}
		
	echo json_encode($result);
	
	mysql_close();
?>
