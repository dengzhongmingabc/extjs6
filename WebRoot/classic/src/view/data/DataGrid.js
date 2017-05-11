Ext.define('MyApp.view.data.DataGrid',
		{
				extend:'Ext.grid.Panel',
			    xtype : 'add-DataGrid',
            	controller:'addDataController',
				requires: [
					'MyApp.store.DateStore'//必需引入下方的 下面才能使用
				],
				listeners: {
					itemclick:'itemclick1'
				},
				title: '本月列表',
				store:  Ext.create("MyApp.store.DateStore"),
            columns: [
					{ text: '年/月/日', dataIndex: 'date',flex:1 },
					{ text: '支出', dataIndex: 'pay', flex: 1 },
					{ text: '收入', dataIndex: 'money',flex:8 }
				]
		}
);
