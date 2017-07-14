$(function(){

	$("#usermokuai").datagrid({
		url:"./users/usermokuai/usermokuai_data.php",
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
		toolbar : '#usermokuai_tool',
		columns : [[
		//角色模块表（编号，角色编号，模块编号）
			{
				checkbox:true,
			},
			{
				field:"id",
				title:"自动编号",
				//checkbox:true,
				width:100,
			},
			{
				field:"U_Id",
				title:"角色编号",
				width:100,
			},
			{
				field:"M_Id",
				title:"模块编号",
				width:100,
			},
		]],
	});




		$('#usermokuai_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#usermokuai_add').form('validate')) {
					$.ajax({
						url : './users/usermokuai/usermokuai_add.php',
						type : 'post',
						data : {
							uid : $("#uid").combobox('getText'),
							mid : $("#mid").combobox('getText'),
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
								$('#usermokuai_add').dialog('close').form('reset');
								$('#usermokuai').datagrid('reload');
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
				$('#usermokuai_add').dialog('close').form('reset');
			},
		}],
	});

	$('#uid').combobox({
		valueField: 'id',
        textField: 'id',
        panelHeight:'auto',
        url: './manager/selectuid.php',
        onLoadSuccess: function (data) {return data.rows;}
	});
	$('#mid').combobox({
		valueField: 'id',    
        textField: 'id',
        lines : true,
        panelHeight:'auto',
		multiple : true,
		checkbox : true,
		onlyLeafCheck : true,    
        panelHeight:'auto',
        url: './manager/selectmid.php',
        onLoadSuccess: function (data) {return data.rows;}
	});

	/**
	 * ******************
	 * 修改信息对话框窗口
	 * ******************
	 */
	$('#usermokuai_edit').dialog({
		width : 350,
		title : '修改管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
			handler : function () {
				if ($('#usermokuai_edit').form('validate')) {
					$.ajax({
						url : './users/usermokuai/usermokuai_edit.php',
						type : 'post',
						data : {
							uids : $('#uses').val(),
							uidedit : $("#uidedit").combobox('getText'),
							midedit : $("#midedit").combobox('getText'),
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
								$('#usermokuai_edit').dialog('close').form('reset');
								$('#usermokuai').datagrid('reload');
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
				$('#usermokuai_edit').dialog('close').form('reset');
			},
		}],
	});

	$('#uidedit').combobox({
		valueField: 'id',
        textField: 'id',
        panelHeight:'auto',
        url: './manager/selectuid.php',
        onLoadSuccess: function (data) {return data.rows;}
	});
	$('#midedit').combobox({
		valueField: 'id',    
        textField: 'id',
        lines : true,
        panelHeight:'auto',
		multiple : true,
		checkbox : true,
		onlyLeafCheck : true,    
        url: './manager/selectmid.php',
        onLoadSuccess: function (data) {return data.rows;}
	});

	usermokuai_tool = {
		reload : function () {
			$('#usermokuai').datagrid('reload');
		},
		redo : function () {
			$('#usermokuai').datagrid('unselectAll');
		},
		add : function () {
			$('#usermokuai_add').dialog('open');
			$('input[name="name"]').focus();
		},
		remove : function () {
			var rows = $('#usermokuai').datagrid('getSelections');
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
							url : './users/usermokuai/usermokuai_delete.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#usermokuai').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#usermokuai').datagrid('loaded');
									$('#usermokuai').datagrid('load');
									$('#usermokuai').datagrid('unselectAll');
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
			// $('#usermokuai_edit').dialog('open');
			var rows = $('#usermokuai').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './users/usermokuai/usermokuai_get.php',
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
							$('#usermokuai_edit').form('load', {
								uids : obj[0].id,
								uidedit : obj[0].U_Id,
								midedit : obj[0].M_Id,
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
