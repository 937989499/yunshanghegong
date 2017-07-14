<table id="checkcong"></table>

<div id="checkcong_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
		<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="checkcong_tool.add();">添加</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="checkcong_tool.edit();">修改</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="checkcong_tool.remove();">删除</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="checkcong_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="checkcong_tool.redo();">取消选择</a>		
	</div>
</div>


<form id="checkcong_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>检查记录主表编号：<input id="cmid" name="cmid" class="easyui-combobox" style="width:200px;"></p>
	<p>检查项编号：<input id="cid" name="cid" class="easyui-combobox" style="width:200px;"></p>
	<p>检查状态：<input id="checkstyles" name="checkstyles" class="easyui-combobox" style="width:200px;"></p>
	<p>照片路径：<input type="text" name="imgurl" class="textbox" style="width:200px;"></p>
</form>


<form id="checkcong_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="hidden" id="ckch" name="ccgd" class="textbox" style="width:200px;">
	<p>检查记录主表编号：<input id="cmid_edit" name="cmid_edit" class="easyui-combobox" style="width:200px;"></p>
	<p>检查项编号：<input id="cid_edit" name="cid_edit" class="easyui-combobox" style="width:200px;"></p>
	<p>检查状态：<input id="checkstyleit" name="checkstyle_edit" class="easyui-combobox" style="width:200px;"></p>
	<p>照片路径：<input type="text" name="imgurldit" class="textbox" style="width:200px;"></p>
</form>



<script type="text/javascript" src="js/checkcong.js"></script>