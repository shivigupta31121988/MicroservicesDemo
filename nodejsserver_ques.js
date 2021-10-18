// include http module in the file
var http = require('http');
 
// create a server
http.createServer(function (req, res) {
    // http header
    // 200 - is the OK message
    // to respond with html content, 'Content-Type' should be 'text/html'
    var jsonInput=['https://i.imgur.com/6tUmQyU.png','C:\\Users\\shivi.gupta\\Downloads\\Bombay Binge.jpeg'];

    res.setHeader("Access-Control-Allow-Origin", "*");
     res.writeHead(200, {'Content-Type': 'application/json'}); 
     res.write(JSON.stringify(jsonInput)); //write a response to the client
     res.end(); //end the response
}).listen(4000); //the server object listens on port 9000