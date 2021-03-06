prdc.views.HtmlPage = Ext.extend(Ext.Panel, {
    autoLoad: 'about.html',
    scroll: 'vertical',
    styleHtmlContent: true,
    initComponent: function(){
        var toolbarBase = {
            xtype: 'toolbar',
            title: this.title
        };
        
        if (this.prevCard !== undefined) {
            toolbarBase.items = {
                ui: 'back',
                text: this.prevCard.title,
                scope: this,
                handler: function(){
                    this.ownerCt.setActiveItem(this.prevCard, { type: 'slide', reverse: true });
                }
            }
        }

        this.dockedItems = toolbarBase;
		        
        prdc.views.HtmlPage.superclass.initComponent.call(this);
        
        this.html ='<div class="about"><h><a href="http://prairiedevcon.com/about">Prairie Developer Conference 2011</a></h><p>The Prairie Developer Conference is the conference event for software professionals in the Canadian prairies!Featuring more than 30 presenters, over 60 sessions, and including session styles such as hands-on coding, panel discussions, and lectures, Prairie Developer Conference is an exceptional learning opportunity!</p><h3>This app created by:</h3> <p><img src="http://a0.twimg.com/profile_images/1350639720/icon_reasonably_small.jpg" /> <div class="authour"><h3>George Chen, (MonsterCoder)</h3><h4>twitter: Georgec_monster<br/>email: MonsterCoder@gmail.com</h4></div></p ><p><img src="http://prairiedevcon.com/Content/imgs/speakers/amirbarylko.jpg" /><div class="authour"><h3>Amir Barylko, <a href="http://www.maventhought.com">MavenThought Inc</a></h3><h4>twitter: abarylko<br/>email: amir@barylko.com</h4></p></div>'
        
    }
});


 
Ext.reg('htmlpage', prdc.views.HtmlPage);