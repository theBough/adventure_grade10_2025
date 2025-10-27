function Wall(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.h = h;
  this.w = w;
  this.col = col;
  
  this.display = function(){
    fill(this.col);
    rect(this.x, this.y, this.w, this.h)
  }
}
