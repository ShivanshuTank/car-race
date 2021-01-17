class Game{
    constructor(){
    
    }
    getState(){
        var gameStateref=database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState=data.val();
        })

    }
    update(state){
        database.ref("/").update({gameState:state})
    }
    start(){
        if(gameState==0){
            player=new Player();
            player.getCount();
            form= new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30)
        text("GAME START",120,100);
        Player.getPlayerInfo();
        if(allplayer!==undefined){
            var position=130;
            for(var plr in allplayer){
               if(plr==="player"+player.index){
                   fill("red")
               } else{
                   fill("black")
               }
                position=position+20;
                text(allplayer[plr].name+":"+allplayer[plr].distance,120,position)
                
            }
            if(keyIsDown(UP_ARROW)&&player.index!==null){
                player.distance+=50
                player.update();
                
            }
        }
    }
}