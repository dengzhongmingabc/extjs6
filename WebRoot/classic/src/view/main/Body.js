Ext.define('MyApp.view.main.Body',
		{
				extend:'Ext.TabPanel',
				collapsible: false,
				//border: true,
				split: true,
				xtype:'mainBody',
                region: "center", //设置方位
                activeTab: 0,
                enableTabScroll: true,
                defaults: { autoScroll: true,styleHtmlContent: true },
                tabBarPosition: 'top',
                fullscreen: true,
                items: [
                        {
                            title: '首页',
                            xtype:'panel',
                            iconCls: 'fa fa-home',
                            html: 'Home Screen'
                        },
                        {
                            title: '联系我们',
                            xtype:'panel',
                            iconCls: 'fa fa-phone',
                            html: 'Contact Screen',
                            closable: true 
                        }
                    ]
            }
);
