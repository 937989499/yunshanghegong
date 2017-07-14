<?php
require '../../config.php';
require '../../dbcz.php';

$ids = $_POST['ids'];

$sql = "DELETE FROM hgc_check WHERE id IN($ids)";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
