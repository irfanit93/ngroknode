const http=require('http');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var httpHeaders=require('http-headers');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
console.log('request received');
res.send('Nodejsngrok repo');
});
app.post('/received',function(req,res){
console.log('request received at received port 3000'+httpHeaders(req).x-github-event);
res.send('Nodejsngrok repo'+req.body);
});
app.listen(3000,function(){
console.log('Listening on 3000');
});