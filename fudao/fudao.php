<?php
	require '../allauth.php';
	session_start();
	if (!isset($_SESSION['admin'])) {
		header('location:login.php');
	}
?>
<table id="fudao"></table>

<div id="fudao_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
	<?php
		if ($rowdsm[17]=="增加辅导员") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="fudao_tool.add();">添加</a>
	<?php
	}
	?>	
	<?php
		if ($rowdsm[18]=="修改辅导员") {
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="fudao_tool.edit();">修改</a>
	<?php
	}
	?>
	<?php
		if ($rowdsm[19]=="删除辅导员") {
	?>	
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="fudao_tool.remove();">删除</a>
	<?php
	}
	?>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="fudao_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="fudao_tool.redo();">取消选择</a>
	</div>
</div>


<form id="fudao_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>用户名：<input type="text" name="username" class="textbox" style="width:200px;"></p>
	<p>真实姓名：<input type="text" name="truename" class="textbox" style="width:200px;"></p>
	<p>组织架构编号：<input id="oid" name="oid" class="easyui-combobox" style="width:200px;" value="1"></p>
</form>


<form id="fudao_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="hidden" id="fud" name="fuid" class="textbox" style="width:200px;">
	<p>用户名：<input type="text" name="username_edit" class="textbox" style="width:200px;"></p>
	<p>真实姓名：<input type="text" name="truename_edit" class="textbox" style="width:200px;"></p>
	<p>组织架构编号：<input id="oid_edit"name="oid_edit" class="easyui-combobox" style="width:200px;"></p>
</form>



<script type="text/javascript" src="./js/fudao.js"></script>
