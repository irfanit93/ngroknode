const express=require('express');
const app=express();
app.get('/',function(req,res){
console.log('request received');
res.send('Nodejsngrok repo');
});
app.post('/received',function(req,res){
console.log('request received at received port 3000');
res.send('Nodejsngrok repo');
});
app.listen(3000,function(){
console.log('Listening on 3000');
});