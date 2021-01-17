var allplayer,game,form,player,gameState=0,playerCount=0,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
   if(playerCount===4){
       game.update(1)
   }
   if(gameState==1){
       clear();
       game.play();
   }
    drawSprites();
}




