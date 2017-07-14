<?php
/**
*
*/
/**
*
*/
class Dbcz
{
	public function AddDeleUp($sql)
	{
  	mysql_query($sql) or die('SQL 错误！');
  	echo mysql_affected_rows();
	}
  public function Get($sqll)
  {
    $sql = mysql_query($sqll) or die('SQL错误');
    $json = '';
    while (!!$row=mysql_fetch_array($sql,MYSQL_ASSOC)) {
        $json.=json_encode($row).",";
    }
    $json = substr($json, 0,-1);
    echo '['.$json.']';
  }
  public function Date($sql,$sql2)
  {
    $query = mysql_query($sql) or die('SQL 错误！');
    $total = mysql_num_rows(mysql_query($sql2));

    $json = '';

    while (!!$row = mysql_fetch_array($query, MYSQL_ASSOC)) {
      $json .= json_encode($row).',';
    }

    $json = substr($json, 0, -1);
    echo '{"total" : '.$total.', "rows" : ['.$json.']}';
  }
}

?>
