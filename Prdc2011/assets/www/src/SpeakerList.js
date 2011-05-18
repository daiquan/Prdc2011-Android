Ext.regModel('Speaker', {
    fields: ['id', 'FirstName', 'LastName']
});
       
speakers = [ {firstName: 'Tommy',   lastName: 'Maintz'}];

prdc.views.SpeakerList = Ext.extend(Ext.Panel, {
    layout: 'card',

    initComponent: function() {		
	    refresh=function(){            
			speakers = [ {firstName: 'resfresh',   lastName: 'Maintz'}];
		};		
		
		refresh();
			            
        this.list = new Ext.List({
            grouped: true,
            indexBar: false,
            itemTpl: '<div class="contact2"><strong>{firstName}</strong> {lastName}</div>',
            store: new Ext.data.JsonStore({
								            model  : 'Speaker',
								            sorters: 'lastName',
								
								            getGroupString : function(record) {
								                return record.get('lastName')[0];
								            },
								
								            data: speakers
								        }),
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
    }
});

Ext.reg('speakerlist', prdc.views.SpeakerList);
