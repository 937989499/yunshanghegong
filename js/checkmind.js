$(function(){
	$('#tt').tabs({
		tabPosition : 'top',
		headerWidth : 300,
		tabWidth : 300,
		plain : true,
		fit : true,
		justified : true,
		pill : true,
	});
	// function menuHandler(item){
	// 	$('#cmlist1').prepend('<p>Click Item: '+item.name+'</p>');
	// }
	// function menuHandler(item){
	// 	$('#cmlist2').prepend('<p>Click Item: '+item.name+'</p>');
	// }
	// function menuHandler(item){
	// 	$('#cmlist3').prepend('<p>Click Item: '+item.name+'</p>');
	// }
	$('#checkrecord').datagrid({
		fit : true,
		fitColumns : true,
		striped : true,
		rownumbers : true,
		border : false,
		pagination : true,//分页属性
		pageSize : 20,
		singleSelect : true,
		pageList : [10, 20, 30, 40, 50],
		pageNumber : 1,
		sortName : 'id',
		url:'./check/checkmind/checkzonghe.php',
		sortOrder : 'desc',
	    toolbar : '#checkrecord_tool',
		columns : [[
			// {
			// 	checkbox : true,
			// },
			{
				field : 'O_Id',
				title : '学院编号',
				width : 200,
				halign : 'center',
				hidden : true,
			},
			{
				field : 'name',
				title : '名称',
				width:25,
			},
			{
				field : 'you',
				title : '优的数量',
				width:25,
			},
			{
				field : 'cha',
				title : '差的数量',
				width:25,
			},
			{
				field : 'type',
				title : '所属学院',
				width:25,
			},
		]],
	 onClickRow : function (index, row) { checkrecord_tool.getid(row.O_Id) }
	});


	$("#imgdialog").dialog({
	    width: 500,
	    height: 450,
	    title:"图片列表",
	    closed: true,
	    modal: true
	});

	checkrecord_tool = {
		search : function () {  	
	        $("#checkrecord").datagrid("load", {
	            checkdatestart: $("#date_from").val(),
	            checkdateend: $("#date_to").val(),
	        });
	        checkrecord_tool.getid(-1)
		},
		getid : function (id) { 
			        
			        
			        // var schid = id;
		        	$('#crck').datagrid({
						url : './check/checkmind/ckcong.php?ids='+id,
						queryParams:{
		                   ids : id,
						},
						fit : true,
						fitColumns : true,
						striped : true,
						rownumbers : true,
						border : false,
						pagination : true,//分页属性
						pageSize : 20,
						pageList : [10, 20, 30, 40, 50],
						pageNumber : 1,
						sortName : 'id',
						// url:'./check/checkmind/checkzonghe.php',
						sortOrder : 'desc',
					    // toolbar : '#checkrecord_tool',
						columns : [[
							{
								checkbox : true,
							},
							{
								field : 'dromnum',
								title : '房间号',
								width:200,
							},
							{
								field : 'userName',
								title : '检查人',
								width:200,
							},
							{
								field : 'CheckStyle',
								title : '检查情况:1.优，3.差',
								width:200,
							},
		                    {
		                       // field: 'CheckDate', title: '检查时间', width: 200, halign: 'center',
		                       // formatter: function (value, row, index) {
		                       //     var unixTimestamp = new Date(value);
		                       //     return unixTimestamp.pattern("y-M-d h:m");
		                       // }
		                    },
						]],
	                onDblClickRow:function(index,row){
	            
	                    $.ajax({
	                        url: "./check/checkmind/ckcong.php",
	                        dataType: "json",
	                        data: { id: row.id, action: "getimglist" },
	                        type: "POST",
	              
	                        success: function (data) {
	                            
	                            $("#imgdialog").dialog("open");
	                            $("#imglist").empty();
	                            $.each(data.rows, function (index,value) {

	                                $("#imglist").append("<img src='" + value.img + "' /><br>");

	                            })
	                        }
	                
	                    });
	                }
				});
		},
	}



	$('#checkrecord1').datagrid({
		fit : true,
		fitColumns : true,
		striped : true,
		rownumbers : true,
		border : false,
		pagination : true,//分页属性
		pageSize : 20,
		pageList : [10, 20, 30, 40, 50],
		pageNumber : 1,
		url : './check/checkmind/checkmind_data2.php',
		sortName : 'id',
		sortOrder : 'desc',
	    toolbar : '#checkrecord_tool1',
		columns : [[
			{
				checkbox : true,
			},
			{
			field : 'Sch_Id',
			title : '架构编号',
			width : 200,
			halign : 'center',
			hidden : true,
			},
			{
				field : 'orgName',
				title : '名称',
				width:200,
			},
			{
				field : 'ycount',
				title : '优的数量',
				width:200,
			},
			{
				field : 'ccount',
				title : '差的数量',
				width:200,
			},
			{
				field : 'name',
				title : '所属学院',
				width:200,
			},
		]],
		onClickRow : function (index, row) { checkrecord_tool1.getidw(row.Sch_Id)}
	});
	$("#imgdialog1").dialog({
    width: 500,
    height: 450,
    title:"图片列表",
    closed: true,
    modal: true
});

checkrecord_tool1 = {
	search : function () {
	    $("#checkrecord1").datagrid("load", {
            checkdatestart1: $("#date_from1").val(),
            checkdateend1: $("#date_to1").val(),

            action: "search",
        });
        checkrecord_tool1.getidw(-1)
	},
	getidw : function (id) {
		$('#crck1').datagrid({
				url : './check/checkmind/ckcong2.php?idss='+id,
				queryParams:{
                   idss : id,
				},
				fit : true,
				singleSelect: true,
				title : '检查记录从列表',
				striped : true,
				rownumbers : true,
				border : true,
				pagination : true,//分页属性
				pageSize : 20,
				pageList : [10, 20, 30, 40, 50],
				pageNumber : 1,
				sortName : 'hid',
				sortOrder : 'desc',
				columns : [[
					{
						checkbox : true,
					},
					{
						field : 'hid',
						title : '房间号',
						width:200,
					},
					{
						field : 'username',
						title : '检查人',
						width:200,
					},
					{
						field : 'checkstyle',
						title : '检查情况:1.优，3.差',
						width:200,
					},
                    {
                       field: 'checkdate', title: '检查时间', width: 200, halign: 'center',
                       formatter: function (value, row, index) {
                           var unixTimestamp = new Date(value);
                           return unixTimestamp.pattern("yyyy-MM-dd hh:mm");
                       }
                    },
				]],

                onDblClickRow:function(index,row){

                    $.ajax({
                        url: "check/checkmind/ckcong2.php",
                        dataType: "json",
                        data: { id: row.id, action: "getimglist" },
                        type: "POST",

                        success: function (data) {

                            $("#imgdialog1").dialog("open");
                            $("#imglist1").empty();
                            $.each(data.rows, function (index,value) {

                                $("#imglist1").append("<img src='" + value.img + "' /><br>");

                            })
                        }

                    });
                }
			});
	},
}


	$('#checkrecord2').datagrid({
		fit : true,
		fitColumns : true,
		striped : true,
		rownumbers : true,
		border : false,
		pagination : true,//分页属性
		pageSize : 20,
		pageList : [10, 20, 30, 40, 50],
		pageNumber : 1,
		url : './check/checkmind/checkmind_data3.php',
		sortName : 'id',
		sortOrder : 'desc',
	    toolbar : '#checkrecord_tool2',
		columns : [[
			{
			field : 'Fd_Id',
			title : '辅导员编号',
			halign : 'center',
			hidden : true ,
			},
			{
				field : 'orgName',
				title : '名称',
				width:250,
			},
			{
				field : 'ycount',
				title : '优的数量',
				width:250,
			},
			{
				field : 'ccount',
				title : '差的数量',
				width:250,
			},
			{
				field : 'name',
				title : '所属学院',
				width:250,
			},
		]],
		onClickRow : function (index, row) { checkrecord_tool2.getidr(row.Fd_Id)}
	});
$("#imgdialog2").dialog({
    width: 500,
    height: 450,
    title:"图片列表",
    closed: true,
    modal: true
});

checkrecord_tool2 = {
	search : function () {
	    $("#checkrecord2").datagrid("load", {
            checkdatestart2: $("#date_from2").val(),
            checkdateend2: $("#date_to2").val(),

            action: "search",
        });
        checkrecord_tool2.getidr(-1)
	},
	getidr : function (id) {
		$('#crck2').datagrid({
				url : './check/checkmind/ckcong3.php?idse='+id,
				queryParams:{
                   idse : id,
				},
				fit : true,
				singleSelect: true,
				title : '检查记录从列表',
				striped : true,
				rownumbers : true,
				border : true,
				pagination : true,//分页属性
				pageSize : 20,
				pageList : [10, 20, 30, 40, 50],
				pageNumber : 1,
				sortName : 'hid',
				sortOrder : 'desc',
				columns : [[
					{
						checkbox : true,
					},
					{
						field : 'hid',
						title : '房间号',
						width:200,
					},
					{
						field : 'username',
						title : '检查人',
						width:200,
					},
					{
						field : 'checkstyle',
						title : '检查情况:1.优，3.差',
						width:200,
					},
                    // {
                    //    // field: 'checkdate', title: '检查时间', width: 200, halign: 'center',
                    //    // formatter: function (value, row, index) {
                    //    //     var unixTimestamp = new Date(value);
                    //    //     return unixTimestamp.pattern("yyyy-MM-dd hh:mm");
                    //    // }
                    // },
				]],

                onDblClickRow:function(index,row){

                    $.ajax({
                        url: "./check/checkmind/ckcong3.php",
                        dataType: "json",
                        data: { id: row.id, action: "getimglist" },
                        type: "POST",

                        success: function (data) {

                            $("#imgdialog2").dialog("open");
                            $("#imglist2").empty();
                            $.each(data.rows, function (index,value) {

                                $("#imglist2").append("<img src='" + value.img + "' /><br>");

                            })
                        }

                    });
                }
			});
	},
}


});



