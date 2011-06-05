Ext.ns('prdc', 'prdc.views');

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    statusBarStyle: 'black',
    onReady: function() {
         
        prdc.App = new prdc.App({
            title: 'Prairie Developer Conference 2011',
            shortUrl: 'http://prairiedevcon.com/',
            twitterSearch: 'PrairieDevCon',
            gmapLink: 'http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=1919+Saskatchewan+Drive,+Regina,+Saskatchewan,+Canada&sll=37.0625,-95.677068&sspn=37.871902,84.375&ie=UTF8&hq=&hnear=1919+Saskatchewan+Dr,+Regina,+Saskatchewan+S4P+4A5,+Canada&z=16',
            gmapText: 'Detal Regina<br /><small>1919 Saskatchewan Drive<br />Regina, SK, S4P 4H2<br />1-800-209-3555</small>',
            gmapCoords: [50.452178, -104.609291]
        });
    }
});
