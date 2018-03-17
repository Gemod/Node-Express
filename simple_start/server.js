//richiesta di usare un modulo js
var express =require('express');
//richiesta modulo url
//var url=require("url");

//nuova istanza di express
var app=express();
//call modules to handler request
var file_manager=require("./mycomponents/fileManager.js");


app.get('/',function(req,res)
{
	file_manager('./mycomponents/index.html',res);

});
app.get('/login',function(req,res)
{
	file_manager('./mycomponents/login.html',res);
});
app.listen(8080,function()
{
	console.log("running on 8080");
});


