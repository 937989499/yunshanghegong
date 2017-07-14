$(function () {
	
	$('#manager').datagrid({
		url : './manager/manager_data.php',
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
		sortOrder : 'desc',
		toolbar : '#manager_tool',
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
				field : 'UserName',
				title : '管理员帐号',
				width:100,
			},
			{
				field : 'TrueName',
				title : '真实姓名',
				width:100,
			},
			{
				field : 'Name',
				title : '组织结构名称',
				width:100,
			},
			{
				field : 'UName',
				title : '角色姓名',
				width:100,
			},
			{
				field : 'QiYong',
				title : '权限管理',
				width:100,
			},
		]],
	});
	/**
	 * 新增管理弹窗
	 * 
	 */
	$('#manager_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#manager_add').form('validate')) {
					$.ajax({
						url : './manager/addManager.php',
						type : 'post',
						data : {
							manager : $('input[name="manager"]').val(),
							password : $('input[name="password"]').val(),
							truename : $('input[name="truename"]').val(),
							oid : $("#oid").combobox('getValue'),
							uid : $("#uid").combobox('getText'),
							// cancheck : $("#cancheck").combobox('getText'),
							// cancheck2: $("#cancheck2").combobox('getText'),
							auth : $("#auths").combobox('getText'),
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
								$('#manager_add').dialog('close').form('reset');
								$('#manager').datagrid('reload');
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
				$('#manager_add').dialog('close').form('reset');
			},
		}],
	});
	/**
	 * /
	 * 修改管理弹窗				
	 */
	$('#manager_edit').dialog({
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
						url : './manager/updateManager.php',
						type : 'post',
						data : {
							manid : $('#mans').val(),
							password_edit : $('input[name="password_edit"]').val(),
							truename_edit : $('input[name="truename_edit"]').val(),
							oid_edit : $("#oid_edit").combobox('getValue'),
							uid_edit : $("#uid_edit").combobox('getText'),
							// cancheck_edit : $("#cancheck_edit").combobox('getText'),
							// cancheck2_edit: $("#cancheck2_edit").combobox('getText'),
							auth_edit : $("#authss").combobox('getText'),
							// password : $('input[name="password_edit"]').val(),
							// auth : $('#auth_edit').combotree('getText'),
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
								$('#manager_edit').dialog('close').form('reset');
								$('#manager').datagrid('reload');
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
				$('#manager_edit').dialog('close').form('reset');
			},
		}],
	});
	
	//管理帐号
	// $('input[name="manager"]').validatebox({
	// 	required : true,
	// 	validType : 'length[2,20]',
	// 	missingMessage : '请输入管理名称',
	// 	invalidMessage : '管理名称在 2-20 位',
	// });
	
	// //管理密码
	// $('input[name="password"]').validatebox({
	// 	required : true,
	// 	validType : 'length[6,50]',
	// 	missingMessage : '请输入管理密码',
	// 	invalidMessage : '管理密码在 6-50 位',
	// });
	
	//修改管理密码
	// $('input[name="password_edit"]').validatebox({
	// 	//required : true,
	// 	validType : 'length[6,50]',
	// 	missingMessage : '请输入管理密码',
	// 	invalidMessage : '管理密码在 6-50 位',
	// });
	
	// 增加
	$('#oid').combobox({
		valueField: 'id',    
        textField: 'text',
        panelHeight:'auto', 
        hasDownArrow : true,   
        url: './manager/selectoid.php',
	});
	$('#uid').combobox({
		valueField: 'id',    
        textField: 'id',
        panelHeight:'auto',
        hasDownArrow : true,    
        url: './manager/selectuid.php',
	});
	$('#auths').combobox({
		valueField: 'label',    
        textField: 'value',
        panelHeight:'auto',    
        data: [{
			label: '1',
			value: '1'
		},{
			label: '2',
			value: '2'
		}
		],
	});
	//  $('#cancheck').combobox({
	// 	valueField: 'id',    
 //        textField: 'id',
 //        lines : true,
 //        panelHeight:'auto',
	// 	multiple : true,
	// 	checkbox : true,
	// 	onlyLeafCheck : true,    
 //        url: './manager/selectlou.php',
 //        onLoadSuccess: function (data) {return data.rows;},
 //        onSelect: function(rec){    
 //            var url = './manager/selecthome.php?id='+rec.id;    
 //            $('#cancheck2').combobox('reload', url);    
 //        }
	// });
	//  $('#cancheck2').combobox({
	//  	valueField: 'id',    
 //        textField: 'id',
 //        lines : true,
 //        panelHeight:'auto',
	// 	multiple : true,
	// 	checkbox : true,
	// 	onlyLeafCheck : true,
 //        onLoadSuccess: function (data) {return data.rows;}
	//  });
	//  //
	 //
	 //
	 //修改操作
	 $('#oid_edit').combobox({
		valueField: 'id',    
        textField: 'id',  
        panelHeight:'auto', 
        hasDownArrow : true, 
        url: './manager/selectoid.php',
        
	});
	$('#uid_edit').combobox({
		valueField: 'id',    
        textField: 'id', 
        panelHeight:'auto',
        hasDownArrow : true,   
        url: './manager/selectuid.php',
        
	});
	$('#authss').combobox({
		valueField: 'label',    
        textField: 'value',
        panelHeight:'auto',    
        data: [{
			label: '1',
			value: '1'
		},{
			label: '2',
			value: '2'
		}
		],
	});
	//  $('#cancheck_edit').combobox({
	// 	valueField: 'id',    
 //        textField: 'id',
 //        lines : true,
 //        panelHeight:'auto',
	// 	multiple : true,
	// 	checkbox : true,
	// 	onlyLeafCheck : true,    
 //        url: './manager/selectlou.php',
 //        onLoadSuccess: function (data) {return data.rows;},
 //        onSelect: function(rec){    
 //            var url = './manager/selecthome.php?id='+rec.id;    
 //            $('#cancheck2_edit').combobox('reload', url);    
 //        }
	// });
	//  $('#cancheck2_edit').combobox({
	//  	valueField: 'id',    
 //        textField: 'id',
	// 	multiple : true,
	// 	panelHeight:'auto',
	// 	checkbox : true,
	// 	onlyLeafCheck : true,
 //        onLoadSuccess: function (data) {return data.rows;}
	//  });
	 //
	manager_tool = {
		reload : function () {
			$('#manager').datagrid('load',{

			});
		},
		redo : function () {
			$('#manager').datagrid('unselectAll');
		},
		add : function () {
			$('#manager_add').dialog('open');
			$('input[name="manager"]').focus();
		},
		search : function(){
			$('#manager').datagrid('reload',{
				name :$('#selelcs').val(),
			});
		},
		remove : function () {
			var rows = $('#manager').datagrid('getSelections');
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
							url : './manager/deleteManager.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#manager').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#manager').datagrid('loaded');
									$('#manager').datagrid('load');
									$('#manager').datagrid('unselectAll');
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
			// $('#manager_edit').dialog('open');
			var rows = $('#manager').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './manager/getManager.php',
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
							var auth = obj[0].auth;
							$('#manager_edit').form('load', {
								manid : obj[0].id,
								manager_edit : obj[0].manager,
								password_edit : obj[0].PassWord,
								truename_edit : obj[0].TrueName,
								oid_edit : obj[0].O_Id,
								uid_edit : obj[0].U_Id,
								// cancheck_edit : (obj[0].CanCheck).substring(0,1),
								// cancheck2_edit : (obj[0].CanCheck).substring(1).split(","),
								auth_edit : auth,
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