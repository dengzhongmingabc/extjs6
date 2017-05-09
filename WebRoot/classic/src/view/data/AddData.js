Ext.define('MyApp.view.data.AddData',
		{
				extend:'Ext.Panel',
				collapsible: false,
				requires:['MyApp.view.data.MoneSta','MyApp.view.data.DataGrid'],
				split: true,
                enableTabScroll: true,
                defaults: { autoScroll: true,styleHtmlContent: true },
                fullscreen: true,
                layout:'vbox',
                defaults: {
                	flex: 1,
                	width: '100%',
                	padding: 10,
                	border:1
                	},
                items: [
	                        {
	                		xtype:'panel',
	                		layout : 'fit',  
				    	    items : [{xtype : 'MoneSta'}]
	                		},
	                        {
	                			xtype:'panel',
	                			flex:2,
								layout:'fit',
								items:[
									{xtype:'add-DataGrid'}
								]
	                		}
                		]
            }
);
