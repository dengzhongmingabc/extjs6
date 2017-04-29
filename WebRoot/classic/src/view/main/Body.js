Ext.define('MyApp.view.main.Body',
		{
				extend:'Ext.tab.Panel',
				collapsible: false,
				border: true,
				split: true,
				xtype:'mainBody',
                region: "center", //设置方位
                activeTab: 0,
                enableTabScroll: true,
                defaults: { autoScroll: true },
                items: [
                        {
                            title: 'Home',
                            iconCls: 'fa fa-home',
                            html: 'Home Screen'
                        },
                        {
                            title: 'Contact',
                            iconCls: 'fa fa-phone',
                            html: 'Contact Screen',
                            closable: true 
                        }
                    ]
            }
);
