function Player(x,y,w,h,col,img){
  this.x = x;
  this.y  =y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = loadImage(img)
  this.walkLeft = [
    loadImage("images/playerOne/ltOne.png"),
    loadImage("images/playerOne/ltTwo.png"),
    loadImage("images/playerOne/ltThree.png")
  ]
  this.walkRight = [
    loadImage("images/playerOne/rtOne.png"),
    loadImage("images/playerOne/rtTwo_.png"),
    loadImage("images/playerOne/rtThree_.png")
  ]
  this.walkCycle = 0;
  this.update = function(){
    //looking for left arrow press
    if(keyIsDown(37)){
      this.x -=1
       this.animateLeft();
    }else if(keyIsDown(39)){
       this.x +=1
       this.animateRight();
        
    }
  }
  //This function will cycle through the walking left pictures of player.
  this.animateRight  =function(){
    if(frameCount %10 == 0){
       this.img = this.walkRight[this.walkCycle];
      this.walkCycle = (this.walkCycle + 1) %3
    }
  }
  //This function will cycle through the walking left pictures of player.
  this.animateLeft  =function(){
    if(frameCount %10 == 0){
       this.img = this.walkLeft[this.walkCycle];
      this.walkCycle = (this.walkCycle + 1) %3
    }
  }
  
  this.display = function(){
    fill(this.col)
    //rect(this.x, this.y, this.w, this.h)
    image(this.img , this.x, this.y)
  }//end display                      
}//end Player
