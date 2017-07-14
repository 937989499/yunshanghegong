
 
<div id="tt" class="easyui-tabs" style="width:1000px;height:600px;">
    <div title="按学院统计" style="padding:20px;display:block;">
	<div style="margin:5px 0;"></div>
		<div id="cmlist1" class="easyui-panel" title="检查记录主列表" style="height:500px;padding:5px;">
		<div data-options="region:'center',border:true" style="height:200px;">
	        <table id="checkrecord"></table>
		        <div id="checkrecord_tool" style="padding:5px;">
					<div style="padding:0 0 0 7px;color:#333;">
							检查日期：<input type="text" name="date_from" class="easyui-datebox" editable="false" style="width:110px">
							到：<input type="text" name="date_to" class="easyui-datebox" editable="false" style="width:110px">
							<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="checkrecord_tool.search();">查询</a>
					</div>
		        </div>
		
		</div>

            <div data-options="region:'south',border:true" style="height: 200px; margin-top:2px;">
                <table id="crck"></table>
            </div>

            <div id="imgdialog">
		        <div id="imglist">

		        </div>
		    </div>
   		</div>
    </div>

    <div title="按班级统计" style="padding:20px;display:block;">
		<div style="margin:5px 0;"></div>
			<div id="cmlist2" class="easyui-panel" title="检查记录主列表" style="width: 750px;height:500px;padding:5px;">
				<div data-options="region:'center',border:true" style="height:200px;">
		        <table id="checkrecord1"></table>
			        <div id="checkrecord_tool1" style="padding:5px;">
						<div style="padding:0 0 0 7px;color:#333;">
								检查日期：<input type="text" name="date_from" class="easyui-datebox" editable="false" style="width:110px">
								到：<input type="text" name="date_to" class="easyui-datebox" editable="false" style="width:110px">
								<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="checkrecord_tool1.search();">查询</a>
						</div>
			        </div>
				</div>
			   <div data-options="region:'south',border:true" style="height: 200px; margin-top:2px;">
                <table id="crck1"></table>
            </div>

            <div id="imgdialog1">
		        <div id="imglist1">

		        </div>
		    </div>
	</div>
	</div>

    <div title="按辅导员统计" style="padding:20px;display:block;">
		<div style="margin:5px 0;"></div>
			<div id="cmlist3" class="easyui-panel" title="检查记录主列表" style="width:750px;height:500px;padding:5px;">
			<div data-options="region:'center',border:true" style="height:200px;">
		        <table id="checkrecord2"></table>
			        <div id="checkrecord_tool2" style="padding:5px;">
						<div style="padding:0 0 0 7px;color:#333;">
								检查日期：<input type="text" name="date_from" class="easyui-datebox" editable="false" style="width:110px">
								到：<input type="text" name="date_to" class="easyui-datebox" editable="false" style="width:110px">
								<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="checkrecord_tool2.search();">查询</a>
						</div>
			        </div>
			</div>
			   <div data-options="region:'south',border:true" style="height: 200px; margin-top:2px;">
                <table id="crck2"></table>
            </div>

            <div id="imgdialog2">
		        <div id="imglist2">

		        </div>
		    </div>
	</div>
	</div>

</div>




     
   <!--  <div data-options="region:'south',title:'检查从表记录',split:true" style="height:200px;width:100%;">
    	<table id="datagrid2"></table>
    </div>    
    <div data-options="region:'center',title:'检查主表记录'" style="padding:5px;background:#eee;width:100%;height:200px;">
    	<table id="checkmind"></table>
    </div>    -->

<!-- <div id="checkmind_tool" style="padding:5px;">
	<div style="margin-bottom:5px;">
		<a href="#" class="easyui-linkbutton" iconCls="icon-add-new" plain="true" onclick="checkmind_tool.add();">添加</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-edit-new" plain="true" onclick="checkmind_tool.edit();">修改</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-delete-new" plain="true" onclick="checkmind_tool.remove();">删除</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-reload" plain="true"  onclick="checkmind_tool.reload();">刷新</a>
		<a href="#" class="easyui-linkbutton" iconCls="icon-redo" plain="true" onclick="checkmind_tool.redo();">取消选择</a>		
	</div>
</div>


<form id="checkmind_add" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<p>检查人员编号：<input id="pid" name="pid" class="easyui-combobox"  style="width:200px;"></p>
	<p>检查房间编号：<input id="hid" name="hid" class="easyui-combobox"  style="width:200px;"></p>
	<p>检查日期：<input id="checkdate"   name="checkdate" class="easyui-datebox" style="width:200px;"></p>
	<p>检查状态：<input  id="cksty"  name="checkstyle" class="easyui-combobox"  style="width:200px;"></p>
</form>


<form id="checkmind_edit" style="margin:0;padding:5px 0 0 25px;color:#333;">
	<input type="hidden" id="chckmid" name="chmid" class="textbox" style="width:200px;">
	<p>检查人员编号：<input id="pidit" name="pidit" class="easyui-combobox"  style="width:200px;"></p>
	<p>检查房间编号：<input id="hidit"  name="hidit" class="easyui-combobox"  style="width:200px;"></p>
	<p>检查日期：<input id="checkdateit"  name="checkdateit" class="easyui-datebox" style="width:200px;"></p>
	<p>检查状态：<input id="chkce"  name="checkstyleit" class="easyui-combobox"   style="width:200px;"></p>
</form>
 -->


<script type="text/javascript" src="js/checkmind.js"></script>