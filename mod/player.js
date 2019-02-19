const express = require('express');
const app = express ();

//response.end(JSON.stringify(theString));

//JSON.parse(theString);

// Gets All Players
app.get('/players',function(request, response) {
  response.writeHead(200);
  response.write('<html><body><p>You have recieved all players</p></body></html>');
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
app.get('/items',function(request, response) {
  response.writeHead(200);
  response.write('<html><body><p>You have recieved all items</p></body></html>');
  response.end();
});

// Get Item
app.get('/item', function(request,response){
   response.writeHead(200);
    response.write("<html><body><p>Recieved the item!</p>");
        response.end(); 
    
});

// Delete Item
app.delete('/:item', function(request,response){
    const item = request.params.item;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have terminated the " + item);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Replace Item
app.put('/:item', function(request,response){
    const item = request.params.item;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have replaced the " + item);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Create Item
app.post('/:item', function(request,response){
    const item = request.params.item;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have created the " + item);
    response.write("</p></body></html>");
    response.end(); 
    
});

// Update Item
app.patch('/:item', function(request,response){
    const item = request.params.item;
    response.writeHead(200);
    response.write("<html><body><p>Hello, you have updated the " + item);
    response.write("</p></body></html>");
    response.end(); 
});

// Get Game
app.get('/game', function(request,response){
   response.writeHead(200);
    response.write("<html><body><p>Recieved the game!</p>");
        response.end(); 
    
});

// Delete Game
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