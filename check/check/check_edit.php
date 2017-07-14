<?php
require '../../config.php';
require '../../dbcz.php';
//Name,Type,Url AS url,IconCls,btnAdd,PId,FId


 $id = $_POST['chkek'];
 $name = $_POST['name_edit'];
 $h_type= $_POST['htype_edit'];
 $homecheck = $_POST['homecheck_edit'];

$sql ="UPDATE hgc_check SET Name='$name',H_Type='$h_type',HomeCheck='$homecheck' WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
