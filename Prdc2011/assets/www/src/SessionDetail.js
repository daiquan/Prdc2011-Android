prdc.views.SessionDetail = Ext.extend(Ext.Panel, {
    layout: 'fit',
    scroll: 'vertical',
    initComponent: function(){
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                ui: 'back',
                text: 'Back',
                scope: this,
                handler: function(){
                    this.ownerCt.setActiveItem(this.prevCard, {
                        type: 'slide',
                        reverse: true,
                        scope: this,
                        after: function(){
                            this.destroy();
                        }
                    });
                }
            }]
        }];
        
        this.items = [{
            styleHtmlContent: true,
            scroll: 'vertical',
            tpl: new Ext.XTemplate('<div class="details"><h3>{title}</h3> <h4>{presenter}, {style}</h4> <p> {abstract} </p></div>'),
            data: this.record.data
        }];

        prdc.views.SessionDetail.superclass.initComponent.call(this);
    }
});

Ext.reg('sessionDetail', prdc.views.SessionDetail);