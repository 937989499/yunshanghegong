
$(function () {

	$('#fudao').datagrid({
		url : './fudao/fudao_data.php',
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
		toolbar : '#fudao_tool',
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
				field : 'UserName',
				title : '用户名',
				align :'center',
				width:100,
			},
			{
				field : 'TrueName',
				title : '真实姓名',
				align :'center',
				width:100,
			},
			{
				field : 'Name',
				title : '组织架构名称',
				width:100,
				align :'center',
			},
		]],
	});

	/**
	 * **************
	 * 新增窗口对话框
	 * **************
	 */
	$('#fudao_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#fudao_add').form('validate')) {
					$.ajax({
						url : './fudao/fudao_add.php',
						type : 'post',
						data : {
							username : $('input[name="username"]').val(),
							truename : $('input[name="truename"]').val(),
							oid : $('#oid').combobox('getValue'),
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
								$('#fudao_add').dialog('close').form('reset');
								$('#fudao').datagrid('reload');
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
				$('#fudao_add').dialog('close').form('reset');
			},
		}],
	});


	/**
	 * ******************
	 * 修改信息对话框窗口
	 * ******************
	 */
	$('#fudao_edit').dialog({
		width : 350,
		title : '修改管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
			handler : function () {
				if ($('#fudao_edit').form('validate')) {
					$.ajax({
						url : './fudao/fudao_edit.php',
						type : 'post',
						data : {
							fuid : $('#fud').val(),
              				username_edit : $('input[name="username_edit"]').val(),
							truename_edit : $('input[name="truename_edit"]').val(),
							oid_edit : $('#oid_edit').combobox('getValue'),
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
								$('#fudao_edit').dialog('close').form('reset');
								$('#fudao').datagrid('reload');
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
				$('#fudao_edit').dialog('close').form('reset');
			},
		}],
	});

  $('#oid').combobox({
    valueField: 'id',
        textField: 'id',
        panelHeight:'auto',
        url: './fudao/oid.php',
  });

  $('#oid_edit').combobox({
    valueField: 'id',
        textField: 'id',
        panelHeight:'auto',
        url: './fudao/oid.php',
  });

	fudao_tool = {
		reload : function () {
			$('#fudao').datagrid('reload');
		},
		redo : function () {
			$('#fudao').datagrid('unselectAll');
		},
		add : function () {
			$('#fudao_add').dialog('open');
			$('input[name="name"]').focus();
		},
		remove : function () {
			var rows = $('#fudao').datagrid('getSelections');
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
							url : './fudao/fudao_delete.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#fudao').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#fudao').datagrid('loaded');
									$('#fudao').datagrid('load');
									$('#fudao').datagrid('unselectAll');
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
			// $('#fudao_edit').dialog('open');
			var rows = $('#fudao').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './fudao/fudao_get.php',
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
							$('#fudao_edit').form('load', {
								fuid : obj[0].id,
								username_edit : obj[0].UserName,
								truename_edit : obj[0].TrueName,
								oid_edit : obj[0].O_Id,
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
