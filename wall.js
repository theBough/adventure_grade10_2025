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
function roomOne(){
  w=[];
  w.push(new Wall(0,235,400,20,"red"))
  w.push(new Wall(0,0,400,20,"red"))
}
