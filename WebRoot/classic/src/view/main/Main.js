 Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.Viewport', 
    title: "Viewport",
    layout: "border",
    defaults: {
        bodyStyle: "background-color: #FFFFFF;",
        frame: true
    },
    requires: [
               'MyApp.view.main.MainMeun',
               'MyApp.view.main.Head',
               'MyApp.view.main.Footer',
               'MyApp.view.main.Body'
           ],
    items: [
                {xtype:'mainMeun'}, 
                { region: "east", width: 200, title: '详情展示', collapsible: true },
                { xtype:'mainHead' },
                {xtype:'mainBody' },
                { xtype:'mainFooter' }
            ]
});