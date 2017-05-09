/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.data.AddDataController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.addDataController',

    requires: [
               'MyApp.model.main.Model'//必需引入下方的 下面才能使用
           ],
    init: function () {  
        //初始化部分，下面是部分是给菜单绑定单击事件，接下来会用，这里先注释  
            this.control({  
            	//这是一个方试 但这个问情 mainMeun 很容易搞成不是唯一的容易出错 ，现在直接view上用controller属性，用listener邦定相应的事件
              	/*'mainMeun': {
              		render: this.onPanelRender
    	        }*/
              });
        },

    itemclick1: function (record , item , index , e , eOpts) {
     Ext.MessageBox.alert('test','test');
    }
});
