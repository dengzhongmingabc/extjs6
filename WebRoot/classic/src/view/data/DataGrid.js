Ext.create('Ext.data.Store', {
    storeId: 'simpsonsStore',
    fields:[ 'date', 'pay', 'money'],
    data: [
        { date: '2017-5-1', pay: '100', money: '500' },
        { date: '2017-5-2', pay: '100', money: '500' },
        { date: '2017-5-3', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-4', pay: '100', money: '500' },
        { date: '2017-5-5', pay: '100', money: '500' }
    ]
});
Ext.define('MyApp.view.data.DataGrid',
		{
				extend:'Ext.grid.Panel',
			    xtype : 'add-DataGrid',
            	controller:'addDataController',
				listeners: {
					itemclick:'itemclick1'
				},
				title: '本月列表',
				store: Ext.data.StoreManager.lookup('simpsonsStore'),
				columns: [
					{ text: '年/月/日', dataIndex: 'date',flex:1 },
					{ text: '支出', dataIndex: 'pay', flex: 1 },
					{ text: '收入', dataIndex: 'money',flex:8 }
				]
		}
);
