var express=require('express'),
    config=require('./serveur/configure'),
    app=express();
app.set('port', process.env.PORT || 3300);
app=config(app);
app.listen(app.get('port'),function(){
    console.log('Serveur lancé: http://localhost:'+app.get('port'));
});