<?php
require '../config.php';
require '../dbcz.php';

$username = $_POST['username'];
$truename = $_POST['truename'];
$oid = $_POST['oid'];


$sql = "INSERT INTO hgc_fudao (UserName,TrueName,O_Id) VALUES('$username','$truename','$oid')";
// echo "INSERT INTO hgc_fudao (UserName,TrueName,O_Id) VALUES('$username','$truename',$oid')";
$ceshi = new Dbcz();
$ceshi->AddDeleUp($sql);
?>
