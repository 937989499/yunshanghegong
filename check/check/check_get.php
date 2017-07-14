<?php
require '../../config.php';
require '../../dbcz.php';
$id = $_POST['id'];
$sql = "SELECT  id,Name,H_Type,HomeCheck FROM hgc_check WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->Get($sql);
?>
