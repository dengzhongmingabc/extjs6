Ext.define('MyApp.view.main.IndexView3',
		{
				extend:'Ext.chart.PolarChart',
				requires:['MyApp.store.Expense','Ext.chart.series.Bar3D','Ext.chart.series.Pie','Ext.chart.interactions.ItemHighlight'],
			    xtype : 'indexView3',
			    store : Ext.create("MyApp.store.Expense"),
			    legend : {  
			      docked : 'bottom'  
			    },  
			    insetPadding : {  
			      top : 100,  
			      bottom : 20,  
			      left : 20,  
			      right : 40  
			    },  
			    series : [ {  
			      type : 'pie',  
			      angleField : 'spent',  
			      label : {  
			        field : 'cat'  
			      },  
			      tooltip : {  
			        trackMouse : true,  
			          renderer : function(storeItem, item) {  
			            var value = ((parseFloat(storeItem.get('spent')/ storeItem.store.sum('spent')) * 100.0).toFixed(2));  
			            this.setHtml(storeItem.get('cat') + ': ' + value + '%');  
			          }  
			      }  
			    } ]  
			  } 
  
);
