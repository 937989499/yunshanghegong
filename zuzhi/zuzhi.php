<?php
require '../allauth.php';
?>
<div class="easyui-layout"style="height:100%;width:100%;">
	<div data-options="region:'west',title:'导航2',split:true,iconCls:'icon-world'" style="height:100%;width:180px;padding:10px;">
		<ul id="navv"></ul>
	</div>
	<div data-options="region:'center',title:'组织架构列表'" style="width:100%;height:100%;">
		<table id="datagrid3"></table>
		<div id="datagrid3_tool" style="padding:5px;">
			<div style="margin-bottom:5px;">
			<?php
				if ($rowdsm[23]=="添加组织架构") {
			?>
				<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="datagrid3_tool.add();">添加</a>
			<?php
			}
			?>
			<?php
				if ($rowdsm[24]=="修改组织架构") {
			?>
				<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="datagrid3_tool.edit();">修改</a>
			<?php
			}
			?>
			<?php
				if ($rowdsm[25]=="删除组织架构") {
			?>	
				<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="datagrid3_tool.remove();">删除</a>
			<?php
			}
			?>	
				<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="datagrid3_tool.reload();">刷新</a>
				<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="datagrid3_tool.redo();">取消选择</a>
			</div>
		</div>
		<form id="datagrid3_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
			<p>组织架构名称：<input name="oname" id="oname"  class="textbox"  style="width:200px;"></p>
			<p>组织架构父编号：<input  name="ofid" id="ofid"  class="easyui-combobox"  style="width:200px;"></p>
			<p>状态：<input type="text" name="ostate" class="textbox" style="width:180px;"></p>
			<p>组织结构类型：<input type="text" name="otype" class="textbox" style="width:200px;"></p>
		</form>


		<form id="datagrid3_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
			<input type="hidden" id="zzhi" name="zuzhis" class="textbox" style="width:200px;">
			<p>组织架构名称：<input name="oname_edit" id="oname_edit"  class="textbox"  style="width:200px;"></p>
			<p>组织架构父编号：<input  name="ofid_edit" id="ofid_edit"  class="easyui-combobox"  style="width:200px;"></p>
			<p>状态：<input type="text" name="ostate_edit" class="textbox" style="width:180px;"></p>
			<p>组织结构类型：<input type="text" name="otype_edit" class="textbox" style="width:200px;"></p>
		</form>
	</div>
</div>

<script type="text/javascript" src="./js/zuzhi.js"></script>





