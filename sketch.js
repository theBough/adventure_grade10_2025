let p;
let w = [];
let rooms = [];
let activeColumn, activeRow;

function setup() {
  createCanvas(400, 400);
  p = new Player(200, 200, 20, 20, "yellow", "images/playerOne/standLeft.png");
  activeRow = 0;
  activeColumn = 0;
  fillRooms();
}

function draw() {
  background(220);
  p.display();
  p.update();
  noStroke();
  for (i = 0; i < w.length; i++) {
    w[i].display();
  } //end loop
  rooms[activeRow][activeColumn].call();
}
