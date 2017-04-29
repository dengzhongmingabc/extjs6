Ext.define('MyApp.view.main.Footer',
		{
				extend:'Ext.toolbar.Toolbar',
				xtype:'mainFooter',
                region: "south", //设置方位
                height:40,
                style:{
                	backgroundColor:'#5fa2dd',
                	marginTop: '2px'
                },
                items: [
    			        '->',{ xtype: 'tbtext', width:200,html: '<div style="font-size:18px">钟鸣科技股份有限公司版本权所有@2017~2020</div>', id: 'copyright' },
    			        '->'
    			    ]
            }
);
