$(function () {
	
	$('#home').datagrid({
		url : './home/home_data.php',
		fit : true,//当设置为true的时候面板大小将自适应父容器
		fitColumns : true,//真正的自动展开/收缩列的大小，以适应网格的宽度，防止水平滚动。
		striped : true,//是否显示斑马线效果。
		rownumbers : true,//如果为true，则显示一个行号列。
		border : false,//
		pagination : true,
		pageSize : 20,
		pageList : [10, 20, 30, 40, 50],
		pageNumber : 1,
		sortName : 'id',
		sortOrder : 'asc',
		toolbar : '#home_tool',
		columns : [[
		//房间表（编号，楼号，房间号，房间类型（1：宿舍，2：教室），组织架构编号，辅导员编号）
			{
				checkbox:true,
			},
			{
				field : 'id',
				title : '自动编号',
				//checkbox : true,
				width:100,
			},
			{
				field : 'LouId',
				title : '楼号',
				align :'center',
				width:100,
			},
			{
				field : 'HId',
				title : '房间号',
				align :'center',
				width:100,
			},
			{
				field : 'HType',
				title : '房间类型',
				align :'center',
				width:100,
			},
			{
				field : 'Name',
				title : '组织架构名称',
				width:100,
				align :'center',
			},
			{
				field : 'UserName',
				title : '辅导员姓名',
				align :'center',
				width:100,
			},
		]],
	});
	
	/**        
	 * **************
	 * 新增窗口对话框
	 * **************
	 */
	$('#home_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#home_add').form('validate')) {
					$.ajax({
						url : './home/home_add.php',
						type : 'post',
						data : {
							louid : $('input[name="louid"]').val(),
							hid : $('input[name="hid"]').val(),
							htype : $('input[name="htype"]').val(),
							oid : $("#oid").combobox('getText'),
							fdid : $("#fdid").combobox('getText'),
						},
						beforeSend : function () {
							$.messager.progress({
								text : '正在新增中...',
							});
						},
						success : function (data, response, status) {
							$.messager.progress('close');
							
							if (data > 0) {
								$.messager.show({
									title : '提示',
									msg : '新增管理成功',
								});
								$('#home_add').dialog('close').form('reset');
								$('#home').datagrid('reload');
							} else {
								$.messager.alert('新增失败！', '未知错误导致失败，请重试！', 'warning');
							}
						}
					});
				}
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function () {
				$('#home_add').dialog('close').form('reset');
			},
		}],
	});

	$('#oid').combobox({
		valueField: 'id',    
        textField: 'id',
        panelHeight:'auto',    
        url: './home/selectoid.php',
        
	});
	$('#fdid').combobox({
		valueField: 'id',    
        textField: 'id',
        panelHeight:'auto',    
        url: './manager/selectfdid.php',
        
	});
	/**        
	 * ******************
	 * 修改信息对话框窗口
	 * ******************
	 */
	$('#home_edit').dialog({
		width : 350,
		title : '修改管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
			handler : function () {
				if ($('#home_edit').form('validate')) {
					$.ajax({
						url : './home/home_edit.php',
						type : 'post',
						data : {
							ho : $('#hme').val(),
							louid_edit : $('input[name="louid_edit"]').val(),
							hid_edit : $('input[name="hid_edit"]').val(),
							htype_edit : $('input[name="htype_edit"]').val(),
							oid_edit : $("#oid_edit").combobox('getText'),
							fdid_edit : $("#fdid_edit").combobox('getText'),
						},
						beforeSend : function () {
							$.messager.progress({
								text : '正在修改中...',
							});
						},
						success : function (data, response, status) {
							$.messager.progress('close');
							
							if (data > 0) {
								$.messager.show({
									title : '提示',
									msg : '修改管理成功',
								});
								$('#home_edit').dialog('close').form('reset');
								$('#home').datagrid('reload');
							} else {
								$.messager.alert('修改失败！', '未知错误或没有任何修改，请重试！', 'warning');
							}
						}
					});
				}
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function () {
				$('#home_edit').dialog('close').form('reset');
			},
		}],
	});
	$('#oid_edit').combobox({
		valueField: 'id',    
        textField: 'id',
        panelHeight:'auto',    
        url: './home/selectoid.php',
	});
	$('#fdid_edit').combobox({
		valueField: 'id',    
        textField: 'id',
        panelHeight:'auto',    
        url: './manager/selectfdid.php',
	});


	home_tool = {
		reload : function () {
			$('#home').datagrid('load',{
				
			});
		},
		redo : function () {
			$('#home').datagrid('unselectAll');
		},
		add : function () {
			$('#home_add').dialog('open');
			$('input[name="louid"]').focus();
		},
		search : function(){
			$('#home').datagrid('reload',{
				lou : $('#homesearchl').val(),
				fang : $('#homesearchf').val(),
			});
		}, 
		remove : function () {
			var rows = $('#home').datagrid('getSelections');
			if (rows.length > 0) {
				$.messager.confirm('确定操作', '您正在要删除所选的记录吗？', function (flag) {
					if (flag) {
						var ids = [];
						for (var i = 0; i < rows.length; i++) {
							ids.push(rows[i].id);
						}
						//console.log(ids.join(','));
						$.ajax({
							type : 'POST',
							url : './home/home_delete.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#home').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#home').datagrid('loaded');
									$('#home').datagrid('load');
									$('#home').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '个管理被删除成功！',
									});
								}
							},
						});
					}
				});
			} else {
				$.messager.alert('提示', '请选择要删除的记录！', 'info');
			}
		},
		edit : function () {
			// $('#home_edit').dialog('open');
			var rows = $('#home').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './home/home_get.php',
					type : 'post',
					data : {
						id : rows[0].id,
					},
					beforeSend : function () {
						$.messager.progress({
							text : '正在获取中...',
						});
					},
					success : function (data) {
						$.messager.progress('close');
						if (data) {
							var obj = $.parseJSON(data);
							$('#home_edit').form('load', {
								ho : obj[0].id,
								louid_edit : obj[0].LouId,
								hid_edit : obj[0].HId,
								htype_edit : obj[0].HType,
								oid_edit : obj[0].O_Id,
								fdid_edit : obj[0].Fd_Id,
							}).dialog('open');
						} else {
							$.messager.alert('获取失败！', '未知错误导致失败，请重试！', 'warning');
						}
					}
				});
			} else if (rows.length == 0) {
				$.messager.alert('警告操作！', '编辑记录至少选定一条数据！', 'warning');
			}
		},
	};	
});