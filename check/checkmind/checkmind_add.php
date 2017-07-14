



<?php
 require '../../config.php';
 require '../../dbcz.php';
 $pid = $_POST['pid'];
 $hid = $_POST['hid'];
 $checkdate = $_POST['checkdate'];
 $checkstyle = $_POST['checkstyle'];
 $sql = "INSERT INTO hgc_checkmind  (`P_Id`, `H_Id`, `CheckDate`,`CheckStyle`) VALUES('$pid','$hid','$checkdate','$checkstyle')";
 // echo"INSERT INTO hgc_checkmind  (`P_Id`, `H_Id`, `CheckDate`,`CheckStyle`) VALUES('$pid','$hid','$checkdate','$checkstyle')";
 $ceshi = new Dbcz();
 $ceshi->AddDeleUp($sql);
?>
