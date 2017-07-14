<?php
require '../config.php';
require '../dbcz.php';

$id = $_POST['id'];

$sql = "SELECT id,UserName,TrueName,O_Id FROM hgc_fudao WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->Get($sql);
?>
