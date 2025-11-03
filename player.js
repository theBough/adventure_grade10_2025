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
  this.walkUp = [
    loadImage("images/playerOne/climbOne.png"),
    loadImage("images/playerOne/climbTwo.png")
  ]
  this.standLeft = loadImage("images/playerOne/standLeft.png")
  this.standRight = loadImage("images/playerOne/standRight.png")
  this.walkCycle = 0;
  this.direction = "left"
  //*************************************************
  this.update = function(){
    //looking for left arrow press
    if(keyIsDown(37)){
      this.x -=1
      this.direction = "left"
       this.animateLeft();
    }else if(keyIsDown(39)){
       this.x +=1
      this.direction = "right"
       this.animateRight();  
    }else if(keyIsDown(38)){
      this.y -=1
      this.animateUp()
      //animate Up
    }else if(keyIsDown(40)){
      this.y += 1;
      //animate Down
      
    }else{
      this.standStill();
    }
    wallCollision()
    roomChange();
  }
  this.standStill  = function(){
    if( this.direction == "left"){
      this.img = this.standLeft
    }else{
      this.img = this.standRight
    }
    
  }
   this.animateUp  =function(){
    if(frameCount %10 == 0){
      this.walkCycle = (this.walkCycle + 1) %2
       this.img = this.walkUp[this.walkCycle];
    }
  }
  //This function will cycle through the walking left pictures of player.
  this.animateRight  =function(){
    if(frameCount %10 == 0){
       this.walkCycle = (this.walkCycle + 1) %3
       this.img = this.walkRight[this.walkCycle];
     
    }
  }
  //This function will cycle through the walking left pictures of player.
  this.animateLeft  =function(){
    if(frameCount %10 == 0){
      this.walkCycle = (this.walkCycle + 1) %3 
      this.img = this.walkLeft[this.walkCycle];
      
    }
  }
  this.display = function(){
    fill(this.col)
    //rect(this.x, this.y, this.w, this.h)
    image(this.img , this.x, this.y)
  }//end display                      
}//end Player
