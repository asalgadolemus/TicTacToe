/*const http = require("http");

http.createServer(function(request,response){
    let animal = 'not sure';
    if (request.url =='/dog/' || request.url =='/dog') animal = 'dog';
    if (request.url =='/cat/' || request.url =='/cat') animal = 'cat';
    response.writeHead(200);
    response.write("<html><body><p>Hello," + animal + " is running.</p>" + 
                    "<p> I is see your are calling: " + request.url +"</p>");
    setTimeout(function() {
        response.write("<p>" + animal + " is really tired!</p></body></html>");
        response.end();
    },5000);
}).listen(8080);

response.end(JSON.stringify(dataSet));

response.writeHead(200);
resopnse.write('<html><bod><p>Please specit an animal in the url path</p></body></html>''
response.end)

console.log('Listening on port 8080...');*/


const express = require('express');
const app = express ();

app.get('/',function(request, response) {
  response.writeHead(200);
  response.write('<html><body><p>Please specify an animal in the URL path</p></body></html>');
  response.end();
});

app.get('/cat', function(request,response){
   response.writeHead(200);
    response.write("<html><body><p>Hello, cat is running.</p>" + 
                    "<p> I is see your are calling: cat</p>");
        response.write("<p>cat is really tired!</p></body></html>");
        response.end(); 
    
});

app.get('/dog', function(request,response){
   response.writeHead(200);
    response.write("<html><body><p>Hello, dog is running.</p>" + 
                    "<p> I is see your are calling: dog</p>");
        response.write("<p>dog is really tired!</p></body></html>");
        response.end(); 
    
});

app.get('/:animal', function(request,response){
    const animal = request.params.animal;
   response.writeHead(200);
    response.write("<html><body><p>Hello, " + animal + " is running.</p>" + 
                    "<p> I is see your are calling: " + animal + "</p>");
        response.write("<p>" + animal + " is really tired!</p></body></html>");
        response.end(); 
    
});

app.delete('/:animal', function(request,response){
    const animal = request.params.animal;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have terminated the " + animal);
    response.write("</p></body></html>");
    response.end(); 
    
});

app.listen(8080, function(){
  console.log('express is now running on port 8080...');  
});