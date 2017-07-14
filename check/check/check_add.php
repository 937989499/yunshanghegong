<?php
 //7、检查项表（编号，名称，房间类型（1：宿舍，2：教室），检查类型（1：卫生情况，2：安全问题））
 require '../../config.php';
 require '../../dbcz.php';
 $name = $_POST['name'];
 $htype = $_POST['htype'];
 $homecheck = $_POST['homecheck'];
 $sql = "INSERT INTO hgc_check (`Name`, `H_Type`, `HomeCheck`) VALUES('$name','$htype','$homecheck')";
 $ceshi = new Dbcz();
 $ceshi->AddDeleUp($sql);
?>
