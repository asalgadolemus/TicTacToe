const express = require('express');
const app = express ();

//response.end(JSON.stringify(MyString));

//JSON.parse(theString);

// Gets All Players
app.get('/',function(request, response) {
  response.writeHead(200);
  response.write('<html><body><p>Please specify an player in the URL path</p></body></html>');
  response.end();
});

// Get Player
app.get('/player', function(request,response){
   response.writeHead(200);
    response.write("<html><body><p>Recieved the player!</p>" + 
                    "<p> I is see your are calling: player</p>");
        response.end(); 
    
});

// Delete Player
app.delete('/:player', function(request,response){
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have terminated the " + player);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Replace Player
app.put('/:player', function(request,response){
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have replaced the " + player);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Create Player
app.post('/:player', function(request,response){
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have created the " + player);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Update Player
app.patch('/:player', function(request,response){
    const player = request.params.player;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have updated the " + player);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Gets All Items
app.get('/',function(request, response) {
  response.writeHead(200);
  response.write('<html><body><p>Please specify an items in the URL path</p></body></html>');
  response.end();
});

// Get Items
app.get('/items', function(request,response){
   response.writeHead(200);
    response.write("<html><body><p>Recieved the items!</p>");
        response.end(); 
    
});

// Delete Items
app.delete('/:items', function(request,response){
    const items = request.params.items;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have terminated the " + items);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Replace Items
app.put('/:items', function(request,response){
    const items = request.params.items;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have replaced the " + items);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Create Items
app.post('/:items', function(request,response){
    const items = request.params.items;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have created the " + items);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Update Items
app.patch('/:items', function(request,response){
    const items = request.params.items;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have updated the " + items);
    response.write("</p></body></html>");
    response.end(); 
});

// Get Items
app.get('/items', function(request,response){
   response.writeHead(200);
    response.write("<html><body><p>Recieved the items!</p>");
        response.end(); 
    
});

// Delete Items
app.delete('/:game', function(request,response){
    const game = request.params.game;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have updated the " + game);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Replace Game
app.put('/:game', function(request,response){
    const game = request.params.game;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have replaced the " + game);
    response.write("</p></body></html>");
    response.end();  
    
});

// Create Game
app.post('/:game', function(request,response){
    const game = request.params.game;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have created the " + game);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Update Game
app.patch('/:game', function(request,response){
    const game = request.params.game;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have updated the " + game);
    response.write("</p></body></html>");
    response.end(); 
});



app.listen(8080, function(){
  console.log('express is now running on port 8080...');  
});