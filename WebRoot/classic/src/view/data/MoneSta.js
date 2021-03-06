Ext.define('MyApp.view.data.MoneSta',
		{
				extend:'Ext.chart.PolarChart',
				requires:['MyApp.store.Expense','Ext.chart.series.Bar3D','Ext.chart.series.Pie','Ext.chart.interactions.ItemHighlight','Ext.chart.series.Area'],
			    xtype : 'MoneSta',
			    store : Ext.create("MyApp.store.Expense"),
			    animate:true,
			    legend : {  
			        docked : 'right'  
			      },  
			      insetPadding : {  
			        top : 50,  
			        bottom : 20,  
			        left : 20,  
			        right : 20  
			      },  
			      series : [ {  
			        type : 'pie',  
			        angleField : 'spent',  
			        label : {  
			          field : 'cat'  
			        },  
			        highlight:{
                        segment:{
                            margin:20
                        }
                    },
			        tooltip : {  
			            trackMouse : true, 
			            renderer : function(storeItem, item) {  
			            	var value = ((parseFloat(item.data.spent/item.store.sum('spent')) * 100.0).toFixed(2));
			                this._tooltip.setHtml(item.get('cat') + ': ' + value + '%');
			            }  
			        }
			      }],
			      sprites : {  
				      type : 'text',  
				      text : '本月类别占比',  
				      font : '25px Helvetica',  
				      width : 100,  
				      height : 15,  
				      x : 60,  
				      y : 40  
				    }
			  } 
  
);
