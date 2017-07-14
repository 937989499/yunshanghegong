
<?php
	require '../../allauth.php';
	session_start();
	if (!isset($_SESSION['admin'])) {
		header('location:login.php');
	}
?>
<table id="users"></table>

<div id="users_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
	<?php
		if ($rowdsm[19]=="增加角色") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="users_tool.add();">添加</a>
	<?php
	}
	?>
	<?php
		if ($rowdsm[20]=="修改角色") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="users_tool.edit();">修改</a>
	<?php
	}
	?>
	<?php
		if ($rowdsm[21]=="删除角色") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="users_tool.remove();">删除</a>
	<?php
	}
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="users_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="users_tool.redo();">取消选择</a>
	<?php
		if ($rowdsm[22]=="删除角色") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="" plain="true" onclick="users_tool.auth();">设置权限</a>
		<?php
	}
		 ?>
	</div>
</div>


<form id="users_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>角色名称：<input type="text" name="users" class="textbox" style="width:200px;"></p>
</form>


<form id="users_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="hidden" id="usersid" name="us" class="textbox" style="width:200px;">
	<p>角色名称：<input type="text" name="usersedit" class="textbox"style="width:200px;"></p>
</form>

<form id="users_auth" style="margin:0;padding:5px 0 0 25px;color:#333;width:200px;height:300px;">
	<input type="hidden" id="autn" name="autm">
	<ul id="setree"></ul>
</form>
<script type="text/javascript" src="js/user.js"></script>
