<?php
require '../../config.php';
require '../../dbcz.php';
$id = $_POST['id'];
$sql = "SELECT id,Cm_Id,C_Id,CheckStyle,ImgUrl FROM hgc_checkcong WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->Get($sql);
?>
