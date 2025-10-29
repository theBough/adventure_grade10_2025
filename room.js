function roomChange(){
  //check to see if the player is off the left side
  //of the canvas
  if(p.x + p.w < 0 ){
    //put the player on the right side of the canvas.
    p.x = width;
  }
}//end RoomChange

function roomOne(){
  w=[];
  w.push(new Wall(0,235,400,20,"red"))
  w.push(new Wall(0,0,400,20,"red"))
 // w.push(new Wall(0,0,20,400,"pink"))
  w.push(new Wall(20,20,180,180,"green"))  
}
