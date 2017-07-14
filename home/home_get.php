<?php
require '../config.php';
require '../dbcz.php';

$id = $_POST['id'];

$sql = "SELECT  id,LouId,HId,HType,O_Id,Fd_Id FROM hgc_home WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->Get($sql);
?>
