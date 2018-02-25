var express = require('express');
	//set an instance of exress
var app = express();

var bodyParser = require('body-parser');
	
var path = require("path");
var session=require("express-session");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'src')));
app.post('/register',function(req, res)
{
	res.setHeader('Content-Type', 'application/json');
	req.session=req.body.firstName+" "+req.body.lastName;
	setTimeout(function()
	{
		res.send(JSON.stringify({
			firstName: req.body.firstName || "empty name",
			lastName: req.body.lastName || "empty lastname"
		}));
	}, 1000);
	
	//debugging -- can see the output in our terminal"!
	console.log('you posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});
app.get('/', function (req, res) {
	res.set({'Content-Type': 'text/html','content-length':100});
	res.send('Hello World!',200);
});
app.get('/home',function(req, res){
	res.set({'Content-Type': 'text/html','content-length':100});
	res.send('welcome into home!');
	console.log(req.query.name);
	res.status(200);
	res.end();
});
app.get('*', function(req, res){
	res.set({'Content-Type': 'text/html','content-length':100});
	res.send('Error , page not found!', 404);
  	console.log("Error page not found!");
});
//can send entire file html or other!
app.listen(8080, function () {
	console.log('Example app listening on port 8080!');
});



