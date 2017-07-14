<?php
require '../config.php';
require '../dbcz.php';
//Name,Type,Url AS url,IconCls,btnAdd,PId,FId


$id = $_POST['ho'];
$louid = $_POST['louid_edit'];
$hid = $_POST['hid_edit'];
$htype = $_POST['htype_edit'];
$oid = $_POST['oid_edit'];
$fdid = $_POST['fdid_edit'];


$sql ="UPDATE hgc_home SET LouId='$louid',HId='$hid',HType='$htype',O_Id='$oid',Fd_Id='$fdid' WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
