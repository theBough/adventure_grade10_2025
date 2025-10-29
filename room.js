function roomChange(){
  if(p.x < 0 ){
    p.x = width;
  }
}//end RoomChange

function roomOne(){
  w=[];
  w.push(new Wall(0,235,400,20,"red"))
  w.push(new Wall(0,0,400,20,"red"))
  w.push(new Wall(0,0,20,400,"pink"))
  w.push(new Wall(20,20,180,180,"green"))  
}
