<?php
require '../../config.php';
require '../../dbcz.php';
//Name,Type,Url AS url,IconCls,btnAdd,PId,FId


 $id = $_POST['ccgd'];
 $cmid = $_POST['cmid_edit'];
 $cid= $_POST['cid_edit'];
 $checkstyle = $_POST['checkstyle_edit'];
 $imgurl = $_POST['imgurldit'];
$sql ="UPDATE hgc_checkcong SET Cm_Id='$cmid', C_Id='$cid',CheckStyle='$checkstyle',ImgUrl='$imgurl' WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
