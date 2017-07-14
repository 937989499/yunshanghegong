<table id="usermokuai"></table>

<div id="usermokuai_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
		<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="usermokuai_tool.add();">添加</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="usermokuai_tool.edit();">修改</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="usermokuai_tool.remove();">删除</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="usermokuai_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="usermokuai_tool.redo();">取消选择</a>
	</div>
</div>


<form id="usermokuai_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>角色编号：<input id="uid" name="uid" class="easyui-combobox" style="width:200px;"></p>
	<p>模块编号：<input id="mid" name="mid" class="easyui-combobox" style="width:200px;"></p>
</form>


<form id="usermokuai_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="text" id="uses" name="uids" class="textbox" style="width:200px;">
	<p>角色编号：<input type="text" id="uidedit" name="uidedit" class="easyui-combobox"  style="width:200px;"></p>
	<p>模块编号：<input type="text" id="midedit" name="midedit" class="easyui-combobox" style="width:200px;"></p>
</form>



<script type="text/javascript" src="js/usermokuai.js"></script>
