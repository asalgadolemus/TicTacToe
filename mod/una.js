const http = require('http');

//let message ="Here's looking at you, kid.";
let options = {
    host: 'www.una.edu', port: 80, path: '/', method: 'GET'
};

const request = http.request(options, function(response){
    response.on('data', function(data){
      console.log(data.toString('utf8'));
    });
});
//request.write(message);
request.end();