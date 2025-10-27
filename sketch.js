let p;
let w=[];

function setup() {
  createCanvas(400, 400);
  p = new Player(200, 200, 20, 20, "yellow", "images/playerOne/standLeft.png");
  roomOne();
}


function draw() {
  background(220);
  p.display();
  p.update();
  for(i =0; i<w.length; i++){
    w[i].display()
  }//end loop
  
}
