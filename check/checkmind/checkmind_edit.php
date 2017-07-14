<?php
require '../../config.php';
require '../../dbcz.php';
//Name,Type,Url AS url,IconCls,btnAdd,PId,FId


 $id = $_POST['chmid'];
 $pid = $_POST['pidit'];
 $hid= $_POST['hidit'];
 $checkdate = $_POST['checkdateit'];
 $checkstyle = $_POST['checkstyleit'];
$sql ="UPDATE hgc_checkmind SET P_Id='$pid', H_Id='$hid',CheckDate='$checkdate',CheckStyle='$checkstyle' WHERE id='$id'";
// echo "UPDATE hgc_checkmind SET P_Id='$pid', H_Id='$hid',CheckDate='$checkdate',CheckStyle='$checkstyle' WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
