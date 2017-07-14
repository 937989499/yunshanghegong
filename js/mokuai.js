$(function () {

	$('#mokuai').datagrid({
		url : './mokuai/mokuai_data.php',
		fit : true,
		fitColumns : true,
		striped : true,
		rownumbers : true,
		border : false,
		pagination : true,
		pageSize : 20,
		pageList : [10, 20, 30, 40, 50],
		pageNumber : 1,
		sortName : 'id',
		toolbar : '#mokuai_tool',
		columns : [[
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
				field : 'Name',
				title : '模块名称',
				align :'center',
				width:100,
			},
			{
				field : 'Type',
				title : '类型',
				align :'center',
				width:100,
			},
			{
				field : 'url',
				title : '路径',
				align :'center',
				width:100,
			},
			{
				field : 'IconCls',
				title : '菜单图标',
				width:100,
				align :'center',
			},
			{
				field : 'btnAdd',
				title : '按钮标识',
				align :'center',
				width:100,
			},
			{
				field : 'PId',
				title : '排序编号',
				align :'center',
				width:100,
			},
			{
				field : 'FId',
				title : '父编号',
				align :'center',
				width:100,
			},
		]],
	});

	$('#mokuai_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#mokuai_add').form('validate')) {
					$.ajax({
						url : './mokuai/addMokuai.php',
						type : 'post',
						data : {
							name : $('input[name="name"]').val(),
							type : $('input[name="type"]').val(),
							url : $('input[name="url"]').val(),
							iconcls : $('input[name="iconcls"]').val(),
							btnadd : $('input[name="btnadd"]').val(),
							pid : $('input[name="pid"]').val(),
							fid: $('input[name="fid"]').val(),
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
								$('#mokuai_add').dialog('close').form('reset');
								$('#mokuai').datagrid('reload');
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
				$('#mokuai_add').dialog('close').form('reset');
			},
		}],
	});

	$('#mokuai_edit').dialog({
		width : 350,
		title : '修改管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
			handler : function () {
				if ($('#manager_edit').form('validate')) {
					$.ajax({
						url : './mokuai/updateMokuai.php',
						type : 'post',
						data : {
							moid : $('#mokuais').val(),
							namedit : $('input[name="namedit"]').val(),
							type_edit : $('input[name="type_edit"]').val(),
							url_edit : $('input[name="url_edit"]').val(),
							iconcls_edit : $('input[name="iconcls_edit"]').val(),
							btnadd_edit : $('input[name="btnadd_edit"]').val(),
							pid_edit : $('input[name="pid_edit"]').val(),
							fid_edit: $('input[name="fid_edit"]').val(),
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
								$('#mokuai_edit').dialog('close').form('reset');
								$('#mokuai').datagrid('reload');
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
				$('#mokuai_edit').dialog('close').form('reset');
			},
		}],
	});

	mokuai_tool = {
		reload : function () {
			$('#mokuai').datagrid('reload');
		},
		redo : function () {
			$('#mokuai').datagrid('unselectAll');
		},
		add : function () {
			$('#mokuai_add').dialog('open');
			$('input[name="name"]').focus();
		},
		remove : function () {
			var rows = $('#mokuai').datagrid('getSelections');
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
							url : './mokuai/deleteMokuai.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#mokuai').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#mokuai').datagrid('loaded');
									$('#mokuai').datagrid('load');
									$('#mokuai').datagrid('unselectAll');
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
			// $('#mokuai_edit').dialog('open');
			var rows = $('#mokuai').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './mokuai/getMokuai.php',
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
							$('#mokuai_edit').form('load', {
								moid : obj[0].id,
								namedit : obj[0].Name,
								type_edit : obj[0].Type,
								url_edit : obj[0].url,
								iconcls_edit : obj[0].IconCls,
								btnadd_edit : obj[0].btnAdd,
								pid_edit : obj[0].PId,
								fid_edit : obj[0].FId,
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
