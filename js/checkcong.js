$(function () {

	$('#checkcong').datagrid({
		url : './check/checkcong/checkcong_data.php',
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
		toolbar : '#checkcong_tool',
		columns : [[
			{
				field : 'id',
				title : '自动编号',
				checkbox : true,
				width:100,
			},
			{
				field : 'Cm_Id',
				title : '检查主表编号',
				align :'center',
				width:100,
			},
	        {
	          field : 'C_Id',
	          title : '检查项编号',
	          align :'center',
	          width:100,
	        },
	        {
	          field : 'CheckStyle',
	          title : '检查状态',
	          align :'center',
	          width:100,
	        },
	        {
	      	  field : 'ImgUrl',
	      	  title : '照片路径',
	      	  align : 'center',
	      	  width : 100,
	        }
		]],
	});

	/**
	 * **************
	 * 新增窗口对话框
	 * **************
	 */
	$('#checkcong_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#checkcong_add').form('validate')) {
					$.ajax({
						url : './check/checkcong/checkcong_add.php',
						type : 'post',
						data : {
							cmid :$('#cmid').combobox('getText'),
				            cid : $('#cid').combobox('getText'), 
				            checkstyles :  $('#checkstyles').combobox('getText'), 
				            imgurl : $('input[name="imgurl"]').val(),
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
								$('#checkcong_add').dialog('close').form('reset');
								$('#checkcong').datagrid('reload');
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
				$('#checkcong_add').dialog('close').form('reset');
			},
		}],
	});
	$('#cid').combobox({
		valueField: 'id',    
        textField: 'id',
        panelHeight:'auto',    
        url: './manager/selectcheck.php',
        onLoadSuccess: function (data) {return data.rows;}
	});
	$('#cmid').combobox({
		valueField: 'id',    
        textField: 'id',
        lines : true,
        panelHeight:'auto',
		checkbox : true,
		onlyLeafCheck : true,    
        url: './manager/selectcheckmind.php',
        onLoadSuccess: function (data) {return data.rows;},
        onSelect: function(rec){    
            var url = './manager/selectminds.php?id='+rec.id;    
            $('#checkstyles').combobox('reload', url);    
        }
	});

	$('#checkstyles').combobox({
		valueField: 'text',    
        textField: 'text',
        panelHeight:'auto', 
        lines : true,
		checkbox : true,
		onlyLeafCheck : true,    
        onLoadSuccess: function (data) {return data.rows;}
	});

	$('#cid_edit').combobox({
		valueField: 'id',    
        textField: 'id',
        panelHeight:'auto',    
        url: './manager/selectcheck.php',
        onLoadSuccess: function (data) {return data.rows;}
	});
	$('#cmid_edit').combobox({
		valueField: 'id',    
        textField: 'id',
        panelHeight:'auto',    
        url: './manager/selectcheckmind.php',
        onLoadSuccess: function (data) {return data.rows;}
	});
	$('#checkstyleit').combobox({
		valueField: 'label',    
        textField: 'value',
        panelHeight:'auto',    
        data: [{
			label: '1',
			value: '优'
		},{
			label: '2',
			value: '差'
		}
		],
	});
	/**
	 * ******************
	 * 修改信息对话框窗口
	 * ******************
	 */
	$('#checkcong_edit').dialog({
		width : 350,
		title : '修改管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
			handler : function () {
				if ($('#checkcong_edit').form('validate')) {
					$.ajax({
						url : './check/checkcong/checkcong_edit.php',
						type : 'post',
						data : {
							ccgd : $('#ckch').val(),
			              	cmid_edit :$('#cmid_edit').combobox('getText'),
				            cid_edit : $('#cid_edit').combobox('getText'), 
				            checkstyle_edit :  $('#checkstyleit').combobox('getText'),
				            imgurldit : $('input[name="imgurldit"]').val(),
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
								$('#checkcong_edit').dialog('close').form('reset');
								$('#checkcong').datagrid('reload');
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
				$('#checkcong_edit').dialog('close').form('reset');
			},
		}],
	});

	checkcong_tool = {
		reload : function () {
			$('#checkcong').datagrid('reload');
		},
		redo : function () {
			$('#checkcong').datagrid('unselectAll');
		},
		add : function () {
			$('#checkcong_add').dialog('open');
			$('input[name="name"]').focus();
		},
		remove : function () {
			var rows = $('#checkcong').datagrid('getSelections');
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
							url : './check/checkcong/checkcong_delete.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#checkcong').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#checkcong').datagrid('loaded');
									$('#checkcong').datagrid('load');
									$('#checkcong').datagrid('unselectAll');
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
			// $('#checkcong_edit').dialog('open');
			var rows = $('#checkcong').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './check/checkcong/checkcong_get.php',
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
							$('#checkcong_edit').form('load', {
								ccgd : obj[0].id,
								cmid_edit : obj[0].Cm_Id,
				                cid_edit : obj[0].C_Id,
				                checkstyle_edit : obj[0].CheckStyle,
				                imgurldit: obj[0].ImgUrl,
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
