Ext.regModel('Speaker', {
    fields: ['id', 'FirstName', 'LastName']
});
       
speakers = [ ];

speakerStore =new Ext.data.JsonStore({
								            model  : 'Speaker',							
								            data: speakers
								        });
								        
prdc.views.SpeakerList = Ext.extend(Ext.Panel, {
    layout: 'card',

    initComponent: function() {		
      
        this.list = new Ext.List({
            grouped: false,
            indexBar: false,
            fullscreen: true,
            itemTpl: '<div class="contact2"><strong>{firstName}</strong> {lastName}</div>',
            store: speakerStore,
            listeners: {
                selectionchange: {fn: this.onSelect, scope: this}
            }
        });
         
        this.listpanel = new Ext.Panel({
            layout: 'fit',
            items: this.list,
            dockedItems: [{
                xtype: 'toolbar',
                title: 'Speakers'
            }],
            listeners: {
                activate: { fn: function(){
                    this.list.getSelectionModel().deselectAll();
                    Ext.repaint();
                }, scope: this }
            }
        });
        
        this.items = this.listpanel;
        
        prdc.views.SpeakerList.superclass.initComponent.call(this);
    },
    
    onSelect: function(sel, records){
        if (records[0] !== undefined) {
            
            var bioCard = new prdc.views.SpeakerDetail({
                prevCard: this.listpanel,
                record: records[0]
            });
            
            this.setActiveItem(bioCard, 'slide');
        }
    },
    listeners: {
                activate: {fn: function(){ 
                					Ext.Ajax.defaultHeaders = {'Accept': 'application/json' } ; 
                    				 Ext.Ajax.request({
						                    url: 'http://prairiedevcon.com/Speakers?format=json',
						                    method: "GET",
						                    success: function(res, request) {                
						                               if (res) {
						                                        result = Ext.util.JSON.decode(res.responseText); 
						                          
						                                          
						                                        speakerStore.add.apply(speakerStore, result); 
						                                    }
						                                    else {
						                                        alert('There was an error retrieving the data.');
						                                    }
						                                },
						                   failure: function(res, request){
						                                 alert('Failed: ', res);
						                                }
		                            });
 

                                    
                                }, scope: this
                        }
    }
});

Ext.reg('speakerlist', prdc.views.SpeakerList);