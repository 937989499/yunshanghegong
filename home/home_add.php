<?php
require '../config.php';
require '../dbcz.php';

$louid = $_POST['louid'];
$hid = $_POST['hid'];
$htype = $_POST['htype'];
$oid = $_POST['oid'];
$fdid = $_POST['fdid'];

$sql = "INSERT INTO hgc_home (LouId,HId,HType,O_Id,Fd_Id)
VALUES
('$louid','$hid','$htype','$oid','$fdid')";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
