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
  
  this.display = function(){
    fill(this.col)
    //rect(this.x, this.y, this.w, this.h)
    image(this.walk[2] , this.x, this.y)
  }//end display                      
}//end Player
