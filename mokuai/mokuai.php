<?php
require '../allauth.php';
?>
<table id="mokuai"></table>

<div id="mokuai_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
	<?php
		if ($rowdsm[16]=="添加模块") {
	?>
		<a href="#" class="easyui-linkbutton" id="mokuaiadd" iconCls="icon-add-new" plain="true" onclick="mokuai_tool.add();">添加</a>
	<?php
	}
	?>
	<?php
		if ($rowdsm[17]=="修改模块") {
	?>
		<a href="#" class="easyui-linkbutton" id="mokuaiedit" iconCls="icon-edit-new" plain="true" onclick="mokuai_tool.edit();">修改</a>
	<?php
	}
	?>
	<?php
		if ($rowdsm[18]=="删除模块") {
	?>
		<a href="#" class="easyui-linkbutton" id="mokuaidelete" iconCls="icon-delete-new" plain="true" onclick="mokuai_tool.remove();">删除</a>
	<?php
	}
	?>
		<a href="#" class="easyui-linkbutton"  iconCls="icon-reload" plain="true"  onclick="mokuai_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton"  iconCls="icon-redo" plain="true" onclick="mokuai_tool.redo();">取消选择</a>
	</div>
</div>


<form id="mokuai_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>模块名称：<input type="text" name="name" class="textbox" style="width:180px;"></p>
	<p>类型：	 <input type="text" name="type" class="textbox" style="width:200px;"></p>
	<p>菜单页面路径：<input  name="url" type="text" class="textbox" style="width:120px;"></p>
	<p>菜单图标：<input name="iconcls" type="text" class="textbox"  style="width:150px;"></p>
	<p>按钮标识：<input  name="btnadd" class="textbox" type="text" style="width:180px;"></p>
	<p>排序编号：<input class="textbox" name="pid" type="text" style="width:180px;"></p>
	<p>父编号：  <input class="textbox" name="fid" type="text" style="width:180px;"></p>
</form>


<form id="mokuai_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="hidden" id="mokuais" name="moid" class="textbox" style="width:200px;">
	<p>模块名称：<input type="text" name="namedit" class="textbox" style="width:200px;"></p>
	<p>类型：<input type="text" name="type_edit" class="textbox" style="width:200px;"></p>
	<p>菜单页面路径：<input type="text" name="url_edit" class="textbox" style="width:200px;"></p>
	<p>菜单图标：<input type="text" name="iconcls_edit" class="textbox" style="width:50px;" ></p>
	<p>按钮标识：<input type="text" name="btnadd_edit" class="textbox"  style="width:50px;"></p>
	<p>排序编号：<input type="text" name="pid_edit" class="textbox" style="width:50px;"></p>
	<p>父编号：<input class="textbox" name="fid_edit" style="width:205px;" value="启用"></p>
</form>



<script type="text/javascript" src="./js/mokuai.js"></script>
