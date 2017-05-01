 Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.Viewport', 
    title: "Viewport",
    layout: "border",
    defaults: {
        //bodyStyle: "background-color: #FFFFFF;",
        
    },
    requires: [
               'MyApp.view.main.MainMeun',
               'MyApp.view.main.Head',
               'MyApp.view.main.Footer',
               'MyApp.view.main.Body',
               'MyApp.view.main.Detail',
               'MyApp.view.main.MainMeunController'
           ],
    items: [
                {xtype:'mainMeun'}, 
                {xtype:'mainDetail',frame: true},
                { xtype:'mainHead' },
                {xtype:'mainBody',frame: true },
                { xtype:'mainFooter' }
            ]
});