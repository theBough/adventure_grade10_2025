function Player(x,y,w,h,col,img){
  this.x = x;
  this.y  =y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = loadImage(img)
  this.walk = [
    loadImage("images/playerOne/ltOne.png"),
    loadImage("images/playerOne/ltTwo.png"),
    loadImage("images/playerOne/ltThree.png")
  ]
  this.walkCycle = 0;
  let stop;
  
  this.update = function(){
    //looking for left arrow press
    if(keyIsDown(37)){
      this.x -=1
      if(!stop){
        stop = setInterval(() => this.animateLeft() ,100);
      }
      this.animateLeft();
    }else{
      clearInterval(stop);
      stop = null;
    }
  }
  
  //This function will cycle through the walking left pictures of player.
  this.animateLeft  =function(){
    this.img = this.walk[this.walkCycle];
    this.walkCycle += 1;
    if(this.walkCycle == this.walk.length){
      this.walkCycle = 0;
    }
  }
  
  this.display = function(){
    fill(this.col)
    //rect(this.x, this.y, this.w, this.h)
    image(this.walk[0] , this.x, this.y)
  }//end display                      
}//end Player
