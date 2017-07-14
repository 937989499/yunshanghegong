$(function () {
	$("#navv").tree({
		url : 'zuzhi/navv.php',
		lines : true,
		onLoadSuccess : function (node, data) {
			if (data) {
				// var _this = this;
				$(data).each(function (index, value) {
					if (this.state == 'closed') {
						$('#navv').tree('expandAll');
					}
				});
			}
		},
		onClick : function (node) {
			var pid = node.id;
			$("#datagrid3").datagrid("load",{
				 id : pid,
			});
		}
	});

	$('#datagrid3').datagrid({
				url : './zuzhi/zuzhi_data.php',
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
				toolbar : '#datagrid3_tool',
				columns : [[
					{
						checkbox : true,
					},
					{
						field : 'id',
						title : '自动编号',
						//checkbox : true,
						width:100,
					},
					{
						field : 'Name',
						title : '角色名称',
						align :'center',
						width:100
					},
					{
						field : 'FId',
						title : '父编号',
						align :'center',
						width:100,
					},
				]],
	});

	$('#datagrid3_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#datagrid3_add').form('validate')) {
					$.ajax({
						url : './zuzhi/zuzhi_add.php',
						type : 'post',
						data : {
							oname : $('input[name="oname"]').val(),
							ofid: $('#ofid').combobox('getValue'),
							ostate : $('input[name="ostate"]').val(),
							otype : $('input[name="otype"]').val(),	
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
								$('#datagrid3_add').dialog('close').form('reset');
								$('#datagrid3').datagrid('reload');
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
				$('#datagrid3_add').dialog('close').form('reset');
			},
		}],
	});

	$('#datagrid3_edit').dialog({
		width : 350,
		title : '修改管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
			handler : function () {
				if ($('#datagrid3_edit').form('validate')) {
					$.ajax({
						url : './zuzhi/zuzhi_edit.php',
						type : 'post',
						data : {
							zuzhis : $('#zzhi').val(),
							oname_edit : $('input[name="oname_edit"]').val(),
							ofid_edit: $('#ofid_edit').combobox('getValue'),
							ostate_edit : $('input[name="ostate_edit"]').val(),
							otype_edit : $('input[name="otype_edit"]').val(),	
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
								$('#datagrid3_edit').dialog('close').form('reset');
								$('#datagrid3').datagrid('reload');
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
				$('#datagrid3_edit').dialog('close').form('reset');
			},
		}],
	});

	$("#ofid").combobox({
		valueField: 'id',
        textField: 'text',
        panelHeight:'auto',
        url: './zuzhi/ofid.php',
	});
	$("#ofid_edit").combobox({
		valueField: 'id',
        textField: 'text',
        panelHeight:'auto',
        url: './zuzhi/ofid.php',
	});
	datagrid3_tool = {
		reload : function () {
			$('#datagrid3').datagrid('reload');
		},
		redo : function () {
			$('#datagrid3').datagrid('unselectAll');
		},
		add : function () {
			$('#datagrid3_add').dialog('open');
			$('input[name="oname"]').focus();
		},
		remove : function () {
			var rows = $('#datagrid3').datagrid('getSelections');
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
							url : './zuzhi/zuzhi_delete.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#datagrid3').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#datagrid3').datagrid('loaded');
									$('#datagrid3').datagrid('load');
									$('#datagrid3').datagrid('unselectAll');
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
			// $('#datagrid3_edit').dialog('open');
			var rows = $('#datagrid3').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './zuzhi/zuzhi_get.php',
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
							$('#datagrid3_edit').form('load', {
								zuzhis : obj[0].id,
								oname_edit : obj[0].text,
								ofid_edit : obj[0].FId,
								ostate_edit : obj[0].state,
								otype_edit : obj[0].type,
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
	}
});
