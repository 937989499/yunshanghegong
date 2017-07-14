<?php
require '../../config.php';

header('Content-Type: text/html; charset=utf-8');

$page = $_POST['page'];
$pageSize = $_POST['rows'];
$first = $pageSize * ($page - 1);
$order = $_POST['order'];
$sort = $_POST['sort'];

$sql="SELECT id,FId AS pid FROM hgc_organizational";
$query=mysql_query($sql);
$row=array();
while ($rows=mysql_fetch_array($query,MYSQL_ASSOC)) {
	$row[]=$rows;
}
$tree = $row;
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

$trees = get_attr($tree,0);

//递归出来的多维数组转二维数组
function imp($tree, $children='children') {
  $imparr = array();
  foreach($tree as $w) {
    if(isset($w[$children])) {
      $t = $w[$children];
      unset($w[$children]);
      $imparr[] = $w;
      if(is_array($t)) $imparr = array_merge($imparr, imp($t, $children));
    } else {
      $imparr[] = $w;
    }
  }
  return $imparr;
}
//通用
$newarrs=array_column(imp($trees),'id');
$str1=implode(",",$newarrs);



$query = mysql_query("SELECT a.id,(select Name from hgc_organizational where id=b.O_Id) as name,b.O_Id, sum( a.CheckStyle=1 ) as you,sum( a.CheckStyle=3 ) as cha FROM hgc_checkmind AS a JOIN hgc_home AS b ON a.H_Id= b.id where b.Sch_Id in ($str1) GROUP BY b.O_Id");


$json = '';

while (!!$row=mysql_fetch_array($query,MYSQL_ASSOC)) {
     $json .=json_encode($row).',';
}
$json =substr($json,0,-1);
echo '['.$json.']';
mysql_close();

?>