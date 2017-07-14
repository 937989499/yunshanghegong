<?php
	require '../allauth.php';
	session_start();
	if (!isset($_SESSION['admin'])) {
		header('location:login.php');
	}
?>

<table id="manager"></table>

<div id="manager_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
	<?php
		if ($rowdsm[23]=="添加人员") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="manager_tool.add();">添加</a>
	<?php
	}
	?>
	<?php
		if ($rowdsm[24]=="修改人员") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="manager_tool.edit();">修改</a>
	<?php
	}
	?>
	<?php
		if ($rowdsm[25]=="删除人员") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="manager_tool.remove();">删除</a>
	<?php
	}
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="manager_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="manager_tool.redo();">取消选择</a>
	</div>
	<div style="padding:0 0 0 7px;color:#333;">
		查询帐号：<input id="selelcs" type="text" class="textbox" name="user" style="width:110px;">
		<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="manager_tool.search();">查询</a>
	</div>
</div>


<form id="manager_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>管理帐号：<input type="text" name="manager" class="textbox" style="width:200px;"></p>
	<p>管理密码：<input type="password" name="password" class="textbox" style="width:200px;"></p>
	<p>真实姓名：<input type="text" name="truename" class="textbox" style="width:200px;"></p>
	<p>组织结构编号：<input id="oid" name="oid" class="easyui-combobox"  style="width:100px;" ><!-- <input type="text" name="oid" class="textbox" style="width:200px;"> --></p>
	<p>角色编号：<input id="uid" name="uid" class="easyui-combobox"   style="width:100px;"><!-- <input type="text" name="uid" class="textbox" style="width:200px;"> --></p>
	<!-- <p>可检查房间->楼号：<input id="cancheck" name="cancheck" class="easyui-combobox" style="width:50px;">房间号:<input id="cancheck2" name="cancheck2" class="easyui-combobox" style="width:50px;"></p> -->
	<p>启用：<input  id="auths" name="auth" class="easyui-combobox" style="width:150px;"></p>
</form>


<form id="manager_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="hidden" id="mans" name="manid" class="textbox" style="width:200px;">
	<p>管理帐号：<input type="text" name="manager_edit" class="textbox" disabled="true" style="width:200px;"></p>
	<p>管理密码：<input type="password" name="password_edit" class="textbox" style="width:200px;"></p>
	<p>真实姓名：<input type="text" name="truename_edit" class="textbox" style="width:200px;"></p>
	<p>组织结构编号：<input id="oid_edit" name="oid_edit"  class="easyui-combobox" style="width:50px;" ><!-- <input type="text" name="oid" class="textbox" style="width:200px;"> --></p>
	<p>角色编号：<input id="uid_edit" name="uid_edit" class="easyui-combobox"  style="width:50px;"><!-- <input type="text" name="uid" class="textbox" style="width:200px;"> --></p>
	<!-- <p>可检查房间->楼号：<input id="cancheck_edit" name="cancheck_edit" class="easyui-combobox" style="width:50px;">房间号:<input id="cancheck2_edit" name="cancheck2_edit" class="easyui-combobox" style="width:50px;"></p> -->
	<p>启用：<input class="easyui-combobox" id="authss" name="auth_edit" style="width:205px;" value="启用"></p>
</form>



<script type="text/javascript" src="./js/manager.js"></script>
