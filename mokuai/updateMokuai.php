<?php
require '../config.php';
require '../dbcz.php';



$id = $_POST['moid'];
$name = $_POST['namedit'];
$type = $_POST['type_edit'];
$url = $_POST['url_edit'];
$iconcls = $_POST['iconcls_edit'];
$btnadd = $_POST['btnadd_edit'];
$pid = $_POST['pid_edit'];
$fid = $_POST['fid_edit'];

$sql = "UPDATE hgc_mokuai SET Name='$name',Type='$type',Url='$url',IconCls='$iconcls',btnAdd='$btnadd',PId='$pid',FId='$fid' WHERE id=$id";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
