let p;
let w;

function setup() {
  createCanvas(400, 400);
  p = new Player(200, 200, 20, 20, "yellow", "images/playerOne/standLeft.png");
  w=new Wall(0,250,400,20,"#2196F3")
}


function draw() {
  background(220);
  p.display();
  p.update()
   w.display();
  
}
