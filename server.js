var http= require("http");

var server = http.createServer(function(req,res){
   res.writeHead(200,{"content-type":"text/plain"});
   res.end("hello Satish")
});

server.listen(7000);
console.log("server is running successfully");
 