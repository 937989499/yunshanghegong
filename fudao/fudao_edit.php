<?php
require '../config.php';
require '../dbcz.php';
//Name,Type,Url AS url,IconCls,btnAdd,PId,FId


$id = $_POST['fuid'];
$username = $_POST['username_edit'];
$truename = $_POST['truename_edit'];
$oid = $_POST['oid_edit'];


$sql ="UPDATE hgc_fudao SET UserName='$username',TrueName='$truename',O_Id='$oid' WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
