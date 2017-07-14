$(function () {

	$('#users').datagrid({
		url : './users/users/users_data.php',
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
		toolbar : '#users_tool',
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
				title : '角色名称',
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
	$('#users_add').dialog({
		width : 350,
		title : '新增管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-add-new',
			handler : function () {
				if ($('#users_add').form('validate')) {
					$.ajax({
						url : './users/users/users_add.php',
						type : 'post',
						data : {
							users : $('input[name="users"]').val(),
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
								$('#users_add').dialog('close').form('reset');
								$('#users').datagrid('reload');
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
				$('#users_add').dialog('close').form('reset');
			},
		}],
	});


	/**
	 * ******************
	 * 修改信息对话框窗口
	 * ******************
	 */
	$('#users_edit').dialog({
		width : 350,
		title : '修改管理',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
			handler : function () {
				if ($('#users_edit').form('validate')) {
					$.ajax({
						url : './users/users/users_edit.php',
						type : 'post',
						data : {
							us : $('#usersid').val(),
							usersedit : $('input[name="usersedit"]').val(),
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
								$('#users_edit').dialog('close').form('reset');
								$('#users').datagrid('reload');
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
				$('#users_edit').dialog('close').form('reset');
			},
		}],
	});
	$("#users_auth").dialog({
		width : 350,
		title : '分配权限',
		modal : true,
		closed : true,
		iconCls : 'icon-user-add',
		buttons : [{
			text : '提交',
			iconCls : 'icon-edit-new',
				handler : function(){
					var rows = $('#setree').tree('getChecked');
					var idms =[];
					for(var i=0;i<rows.length;i++){
						idms.push(rows[i].id);
					};
						var idmstr = idms.join(",");
						$.ajax({
							url:"./users/usersauth.php",
							dataType:"text",
							data:{
								idms:idmstr,
								uids:$('#autn').val()
							},
							type:"post",
							beforeSend:function(){
								$.messager.progress({title:"执行中",text:""});
							},
							success:function(data, response, status){
								$('#users').datagrid('reload');
								// $.messager.alert("成功",data);
							},
							error:function(){
								$.messager.alert("警告","系统故障！","error");
							},
							complete:function(){
								$("#users_auth").dialog("close");
								$.messager.progress("close");
							}
				});
		},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function () {
				$('#users_auth').dialog('close').form('reset');
			},
		}],
	});
	users_tool = {
		reload : function () {
			$('#users').datagrid('reload');
		},
		redo : function () {
			$('#users').datagrid('unselectAll');
		},
		add : function () {
			$('#users_add').dialog('open');
			$('input[name="users"]').focus();
		},
		remove : function () {
			var rows = $('#users').datagrid('getSelections');
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
							url : './users/users/users_delete.php',
							data : {
								ids : ids.join(','),
							},
							beforeSend : function () {
								$('#users').datagrid('loading');
							},
							success : function (data) {
								if (data) {
									$('#users').datagrid('loaded');
									$('#users').datagrid('load');
									$('#users').datagrid('unselectAll');
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
			// $('#users_edit').dialog('open');
			var rows = $('#users').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '编辑记录只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				$.ajax({
					url : './users/users/users_get.php',
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
							$('#users_edit').form('load', {
								us : obj[0].id,
								usersedit : obj[0].Name,
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
		auth : function(){
			var rows = $('#users').datagrid('getSelections');
			if (rows.length > 1) {
				$.messager.alert('警告操作！', '设置权限只能选定一条数据！', 'warning');
			} else if (rows.length == 1) {
				var idt = rows[0].id;
				$("#setree").tree({
                    url:'./users/usertree.php',
                    checkbox: true,
                    method:'post',
                    // queryParams: {
                    //     Id: idt,
                    // },
                });
               	$.ajax({
					url : './users/users/users_get.php',
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
							$('#users_auth').form('load', {
								autm : obj[0].id,
							}).dialog('open');

							$(obj).each(function(index,obj){
								// alert(index);
								var n = $("#setree").tree('find',obj.mid);
                            	if(n){
                               		$("#setree").tree('check',n.target);
                            	}
							});
						} else {
							$.messager.alert('获取失败！', '未知错误导致失败，请重试！', 'warning');
						}
					}
				});
				// $.ajax({
				// 	url:'./users/users/usergetree.php',
				// 	type:'post',
				// 	data:{
				// 		tid : rows[0].id, 
				// 	},
				// 	success:function(data){
				// 		$(data).each(function(i, obj){
    //                         var n = $("#setree").tree('find',obj.id);
    //                         if(n){
    //                            $("#setree").tree('select',n.target);
    //                         }
    //                     });
				// 	}
					
				// });
    //             // $("#users_auth").dialog({
                //     title: "分配权限",
                // });
                // $("#users_auth").dialog("open");
            }
		}, 

	};

});
