<?php
require '../../allauth.php';
?>
<table id="check"></table>

<div id="check_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
		<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="check_tool.add();">添加</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="check_tool.edit();">修改</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="check_tool.remove();">删除</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="check_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="check_tool.redo();">取消选择</a>
	</div>
</div>


<form id="check_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>检查项名称：<input type="text" name="name" class="textbox" style="width:200px;"></p>
	<p>房间类型：<input id="htypp" name="htype" class="easyui-combobox" style="width:200px;"></p>
	<p>检查类型：<input id="hck"  name="homecheck" class="easyui-combobox" style="width:200px;"></p>
</form>


<form id="check_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="hidden" id="cke" name="chkek" class="textbox" style="width:200px;">
	<p>检查项名称：<input type="text" name="name_edit" class="textbox" style="width:200px;"></p>
	<p>房间类型：<input id="htyppit"  name="htype_edit" class="easyui-combobox" style="width:200px;"></p>
	<p>检查类型：<input id="hckit"  name="homecheck_edit" class="easyui-combobox" style="width:200px;"></p>
</form>



<script type="text/javascript" src="js/check.js"></script>
