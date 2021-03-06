prdc.views.TrackList = Ext.extend(Ext.Panel, {
    layout: 'card',
    scroll: 'vertical',
    initComponent: function() {	
        var toolbarBase = {
            xtype: 'toolbar',
            title: "Sessions"
        };	

        this.list = new Ext.List({
         	itemTpl: '<div class="x-list-item-body"><div class="title"><strong>{key}</strong> <small>({numberOfSessions})</small></div>  <div class="icon"> </div></div>',
            store: trackStore,
            listeners: {
                selectionchange: {fn: this.onSelect, scope: this}
            }
        });
        
        this.list.on('afterrender', this.loadStore, this);
        
        this.items = [this.list];
        
        this.dockedItems = toolbarBase;
        
        prdc.views.TrackList.superclass.initComponent.call(this);
    },
    
    onSelect: function(sel, records){
        if (records[0] !== undefined) {
            
													            var track = new prdc.views.SessionList({
													                prevCard: this.listpanel,
													                record: records[0]
													            });
													            
													            this.setActiveItem(track, 'slide');
													        }		   
     },
     loadStore : function() {
     	if (tracks.length === 0) {
     		loadTrackStore(this.list);
     	}
     }
});

Ext.reg('tracklist', prdc.views.TrackList);