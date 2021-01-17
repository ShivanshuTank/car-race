class Player{
    constructor(){
    this.name=null;
    this.distance=0;
    this.index=null;
    }
    getCount(){
        var playerCountref=database.ref("playerCount")
        playerCountref.on("value",(data)=>{
            playerCount=data.val();
        })

    }
    updatecount(count){
        database.ref("/").update({playerCount:count})
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({name:this.name})
    }
    static getPlayerInfo(){
    var PlayerInforef=database.ref("players")
    PlayerInforef.on("value",(data)=>{
         allplayer=data.val();
    })
    }
//sounds funny
}