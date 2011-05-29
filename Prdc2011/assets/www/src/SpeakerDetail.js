prdc.views.SpeakerDetail = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    showSessionData: true,
    initComponent: function(){
        this.dockedItems = [{
            xtype: 'toolbar',
            title: this.record.data.name,
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
            tpl: new Ext.XTemplate('<div class="speaker_details"><tpl if="picture"><img class="avata_img" src="http://prairiedevcon.com/Content/imgs/speakers/{picture}" alt="{picture}" /></tpl> <div><h3>{firstName} {lastName}, <small>{location}</small></h3><h4>{company}</h4> </div></div> <p>{bio}</p> '),
            data: this.record.data
        }];

        prdc.views.SpeakerDetail.superclass.initComponent.call(this);
    }
});

Ext.reg('speakerdetail', prdc.views.SpeakerDetail);