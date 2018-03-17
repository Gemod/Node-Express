var fs=require("fs");
var randomUtil=require("./utilities.js");
function handlerRequest(path,res)
{
	fs.readFile(path,null,function(error,data)
		{
			if(error)
			{
				res.writeHead(404);
				res.write("Page not found!");
			}
			else
			{
				res.write(data + randomUtil());
			}
			res.end();
		});
}
module.exports=handlerRequest;
