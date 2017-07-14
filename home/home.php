<?php
	require '../allauth.php';
	session_start();
	if (!isset($_SESSION['admin'])) {
		header('location:login.php');
	}
?>


<table id="home"></table>

<div id="home_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
	<?php
		if ($rowdsm[14]=="添加房间") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="home_tool.add();">添加</a>
	<?php
	}
	?>	
	<?php
		if ($rowdsm[15]=="修改房间") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="home_tool.edit();">修改</a>
	<?php
	}
	?>
	<?php
		if ($rowdsm[16]=="删除房间") {
	?>	
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="home_tool.remove();">删除</a>
	<?php
	}
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="home_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="home_tool.redo();">取消选择</a>
	</div>
	<div style="padding:0 0 0 7px;color:#333;">
		楼号：<input id="homesearchl" type="text" class="textbox" name="lou" style="width:110px;">
		房间号：<input id="homesearchf" type="text" class="textbox" name="home" style="width:110px;">
		<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="home_tool.search();">查询</a>
	</div>
</div>
<!-- 房间表（编号，楼号，房间号，房间类型（1：宿舍，2：教室），组织架构编号，辅导员编号） -->
<form id="home_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>楼号：<input type="text" name="louid" class="textbox" style="width:180px;"></p>
	<p>房间号：<input type="text" name="hid" class="textbox" style="width:200px;"></p>
	<p>房间类型：<input  name="htype" type="text" class="textbox" style="width:120px;"></p>
	<p>组织架构编号：<input name="oid" id="oid"  class="easyui-combobox"  style="width:200px;"></p>
	<p>辅导员编号：<input  name="fdid" id="fdid"  class="easyui-combobox"  style="width:200px;"></p>
</form>


<form id="home_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="hidden" id="hme" name="ho" class="textbox" style="width:200px;">
	<p>楼号：<input type="text" name="louid_edit" class="textbox" style="width:180px;"></p>
	<p>房间号：<input type="text" name="hid_edit" class="textbox" style="width:200px;"></p>
	<p>房间类型：<input  name="htype_edit" type="text" class="textbox" style="width:120px;"></p>
	<p>组织架构编号：<input name="oid_edit" id="oid_edit"  class="easyui-combobox"  style="width:150px;"></p>
	<p>辅导员编号：<input  name="fdid_edit" id="fdid_edit" class="easyui-combobox"  style="width:180px;"></p>
</form>

<script type="text/javascript" src="js/home.js"></script>
