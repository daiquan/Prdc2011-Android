Ext.regModel('Speaker', {
    fields: ['id', 'FirstName', 'LastName', 'Picture', 'Company', 'Bio', 'Blog', 'Email', 'Location', 'Twitter', 'WebSite', 'Year']
});

Ext.regModel('Session', {
    fields: ['Id', 'Presenter', 'Style', 'Title', 'Track', 'Abstract', 'Year']
});

Ext.regModel('Track', {
    fields: ['Id', 'Category', 'Key', 'Name', 'NumberOfSessions']
});

Ext.regModel('Tweet', {
    fields: ['id', 'text', 'to_user_id', 'from_user', 'created_at', 'profile_image_url']
});     

