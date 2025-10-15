let p;
function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,20,20,"yellow","images/playerOne/ltOne.png")
}

function draw() {
  background(220);
  p.display();
}
