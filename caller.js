var Request = require("request");

Request.get("http://localhost:9000/", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(body);
});