<?php
	require '../../config.php';
	$id = $_POST['id'];
	$sqll ="SELECT a.id AS id,a.Name,b.M_Id AS mid FROM hgc_users AS a JOIN hgc_usermokuai AS b ON a.id=b.U_Id WHERE a.id='$id' "; 
	$sql = mysql_query($sqll) or die('SQL错误');
    $json = '';
    while (!!$row=mysql_fetch_array($sql,MYSQL_ASSOC)) {
        $json.=json_encode($row).",";
    }
    $json = substr($json, 0,-1);
    if ($json) {
    	echo '['.$json.']';
    }
    else{
    	$sql2="SELECT id,Name FROM hgc_users WHERE id='$id'";
    	$sql3 = mysql_query($sql2) or die('SQL错误');
	    $json2 = '';
	    while (!!$row2=mysql_fetch_array($sql3,MYSQL_ASSOC)) {
	        $json2.=json_encode($row2).",";
	    }
	    $json2 = substr($json2, 0,-1);
	    echo '['.$json2.']';
    }
?>