<?php
header("content-type:text/html;charset=utf-8");  
$categories = array(  
    array('id'=>1,'name'=>'电脑','pid'=>0),  
    array('id'=>2,'name'=>'手机','pid'=>0),  
    array('id'=>3,'name'=>'笔记本','pid'=>1),  
    array('id'=>4,'name'=>'台式机','pid'=>1),  
    array('id'=>5,'name'=>'智能机','pid'=>2),  
    array('id'=>6,'name'=>'功能机','pid'=>2),  
    array('id'=>7,'name'=>'超级本','pid'=>3),  
    array('id'=>8,'name'=>'游戏本','pid'=>3),  
);
$tree = $categories;  
function get_attr($a,$pid){  
    $tree = array();                                //每次都声明一个新数组用来放子元素  
    foreach($a as $v){  
        if($v['pid'] == $pid){                      //匹配子记录  
            $v['children'] = get_attr($a,$v['id']); //递归获取子记录  
            if($v['children'] == null){  
                unset($v['children']);             //如果子元素为空则unset()进行删除，说明已经到该分支的最后一个元素了（可选）  
            }  
            $tree[] = $v;                           //将记录存入新数组  
        }  
    }  
    return $tree;                                  //返回新数组  
}  
echo "<br/><br/><br/>";  
  
print_r(get_attr($tree,0)); 
// function has_child($id){
	// 	$rs = mysql_query("select FId from hgc_mokuai where FId=$id");
	// 	$row = mysql_fetch_array($rs);
	// 	return $row[0] > 0 ? true : false;
	// }
	// $json = substr($json, 0, -1);
	// echo '['.$json.']';
	// 	 // $json .= json_encode($result).',';
		//$json.=json_encode($mokarr).",";
	// var_dump($stauth);
	
	 // var_dump($mokarr);
	//$query = mysql_query("SELECT id,Name AS text,Url AS url,PId,FId FROM hgc_mokuai  WHERE FId=$id AND btnAdd='0'") or die('SQL 错误！');
	//$json = '';
	//$row = mysql_fetch_array($query, MYSQL_ASSOC)
	// var_dump($arrsry);
	// $Midarr= array();   
?>
