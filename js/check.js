$(function () {

	$('#check').datagrid({
		url : './check/check/check_data.php',
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
		toolbar : '#check_tool',
		columns : [[
			{
				field : 'id',
				title : '自动编号',
				checkbox : true,
				width:100,
			},
			{
				field : 'Name',
				title : '检查项名称',
				align :'center',
				width:100,
			},
	      {
	        field : 'H_Type',
	        title : '房间类型',
	        align :'center',
	        width:100,
	      },
	      {
	        field : 'HomeCheck',
	        title : '检查类型',
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
	$('#check_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#check_add').form('validate')) {
					$.ajax({
						url : './check/check/check_add.php',
						type : 'post',
						data : {
							  name : $('input[name="name"]').val(),
				              htype : $('#htypp').combobox('getText'),
				              homecheck : $('#hck').combobox('getText'),
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
								$('#check_add').dialog('close').form('reset');
								$('#check').datagrid('reload');
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
				$('#check_add').dialog('close').form('reset');
			},
		}],
	});
	$('#htypp').combobox({
		valueField: 'label',    
        textField: 'value',
        panelHeight:'auto',    
        data: [{
			label: '1',
			value: '宿舍'
		},{
			label: '2',
			value: '教室'
		}
		],
	});
	$('#hck').combobox({
		valueField: 'label',    
        textField: 'value',
        panelHeight:'auto',    
        data: [{
			label: '1',
			value: '卫生情况'
		},{
			label: '2',
			value: '安全问题'
		}
		],
	});
	/**
	 * ******************
	 * 修改信息对话框窗口
	 * ******************
	 */
	$('#check_edit').dialog({
		width : 350,
		title : '修改管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
			handler : function () {
				if ($('#check_edit').form('validate')) {
					$.ajax({
						url : './check/check/check_edit.php',
						type : 'post',
						data : {
							chkek : $('#cke').val(),
			              name_edit : $('input[name="name_edit"]').val(),
			              htype_edit : $('#htyppit').combobox('getText'),
			              homecheck_edit : $('#hckit').combobox('getText'),
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
								$('#check_edit').dialog('close').form('reset');
								$('#check').datagrid('reload');
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
				$('#check_edit').dialog('close').form('reset');
			},
		}],
	});

	$('#htyppit').combobox({
		valueField: 'label',    
        textField: 'value',
        panelHeight:'auto',    
        data: [{
			label: '1',
			value: '宿舍'
		},{
			label: '2',
			value: '教室'
		}
		],
	});
	$('#hckit').combobox({
		valueField: 'label',    
        textField: 'value',
        panelHeight:'auto',    
        data: [{
			label: '1',
			value: '卫生情况'
		},{
			label: '2',
			value: '安全问题'
		}
		],
	});

	check_tool = {
		reload : function () {
			$('#check').datagrid('reload');
		},
		redo : function () {
			$('#check').datagrid('unselectAll');
		},
		add : function () {
			$('#check_add').dialog('open');
			$('input[name="name"]').focus();
		},
		remove : function () {
			var rows = $('#check').datagrid('getSelections');
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
							url : './check/check/check_delete.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#check').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#check').datagrid('loaded');
									$('#check').datagrid('load');
									$('#check').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '个管理被删除成功！',
									});
								}
								else{
									$.messager.alert('删除失败！', '未知错误或数据与其他表相关联，请重试！', 'warning');
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
			// $('#check_edit').dialog('open');
			var rows = $('#check').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './check/check/check_get.php',
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
							$('#check_edit').form('load', {
								chkek : obj[0].id,
								name_edit : obj[0].Name,
				                htype_edit : obj[0].H_Type,
				                homecheck_edit : obj[0].HomeCheck,
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
