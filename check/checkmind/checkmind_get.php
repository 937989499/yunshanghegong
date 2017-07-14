<?php
require '../../config.php';
require '../../dbcz.php';
$id = $_POST['id'];
$sql = "SELECT id,P_Id,H_Id,CheckDate,CheckStyle FROM hgc_checkmind WHERE id='$id'";
$ceshi = new Dbcz();
$ceshi->Get($sql);
?>
