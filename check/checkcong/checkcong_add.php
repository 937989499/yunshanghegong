

<?php
 require '../../config.php';
 require '../../dbcz.php';
 $cmid = $_POST['cmid'];
 $cid = $_POST['cid'];
 $checkstyle = $_POST['checkstyles'];
 $imgurl = $_POST['imgurl'];
 $sql = "INSERT INTO hgc_checkcong  (`Cm_Id`, `C_Id`, `CheckStyle`,`ImgUrl`) VALUES('$cmid','$cid','$checkstyle','$imgurl')";
 $ceshi = new Dbcz();
 $ceshi->AddDeleUp($sql);
?>
