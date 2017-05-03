Ext.define('MyApp.store.Expense', {  
  extend : 'Ext.data.Store',  
  xtype : 'expense',  
  fields : [ 'cat', 'spent' ],  
  data : [ {  
    "cat" : "Restaurant",  
    "spent" : 100  
  }, {  
    "cat" : "Travel",  
    "spent" : 150  
  }, {  
    "cat" : "Insurance",  
    "spent" : 500  
  }, {  
    "cat" : "Rent",  
    "spent" : 1000  
  }, {  
    "cat" : "Groceries",  
    "spent" : 400  
  }, {  
    "cat" : "Utilities",  
    "spent" : 300  
  } ]  
});  