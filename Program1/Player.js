const express = require('express');
const app = express ();

//response.end(JSON.stringify(theString));

// Gets All Players
app.get('/players',function(request, response) {
  response.json({player1: 'Antonio', player2: 'Bob'});
  response.end();
});

// Get Player
app.get('/:player', function(request,response){
    const player = request.params.player;
    response.json("Hello, you have recieved " + player);
    response.end(); 
});

// Delete Player
app.delete('/players/:player', function(request,response){
    const player = request.params.player;
    response.json("Hello, you have terminated the " + player);
    response.end(); 
});

// Update Player
app.put('/players/:player', function(request,response){
    const player = request.params.player;
    response.json("Hello, you have updated " + player);
    response.end();  
});

// Create Player
app.post('/players/:player', function(request,response){
    const player = request.params.player;
    response.json("Hello, you have added the " + player);
    response.end(); 
});

// Gets All Items
app.get('/items',function(request, response) {
  response.json({item1: 'item 1', item2: 'item 2'});
  response.end();
});

// Get Item
app.get('/:item', function(request,response){
    const item = request.params.item;
    response.json("Hello, you have recieved your " + item);
    response.end(); 
});

// Delete Item
app.delete('/items/:item', function(request,response){
    const item = request.params.item;
    response.json("Hello, you have terminated  "+ item );
    response.end();
});

// Replace Item
app.put('/items/:item', function(request,response){
    const item = request.params.item;
    response.json("Hello, you have updated the " + item);
    response.end();
});

// Create Item
app.post('/items/:item', function(request,response){
    const item = request.params.item;
    response.json("Hello, you have added the " + item);
    response.end();
});

// Get All Games
app.get('/games', function(request,response){
    response.json("Recieved the games!");
    response.end(); 
});

// Get Game
app.get('/:game', function(request,response){
    const game = request.params.game;
    response.json("Hello, you have recieved " + game);
    response.end(); 
});

// Delete Game
app.delete('/games/:game', function(request,response){
    const game = request.params.game;
    response.json("Hello, you have terminated the " + game);
    response.end();
    
});

// Update Game
app.put('/games/:game', function(request,response){
    const game = request.params.game;
    response.json("Hello, you have updated the " + game);
    response.end();  
});

// Create Game
app.post('/games/:game', function(request,response){
    const game = request.params.game;
    response.json("Hello, you have added the " + game);
    response.end(); 
});

app.listen(8080, function(){
  console.log('express is now running on port 8080...');  
});