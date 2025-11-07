let p;
let w = [];
let rooms = [];
let activeColumn, activeRow;
//let backgroundImage
function setup() {
  createCanvas(400, 400);
  p = new Player(200, 62, 20, 20, "yellow", "images/playerOne/standLeft.png");
  activeRow = 0;
  activeColumn = 0;
  fillRooms();
  //backgroundImage = loadImage("images/maps/megaManMap.jpg")
}
function draw() {
  background(220);
  noStroke();
  for (i = 0; i < w.length; i++) {
    w[i].display();
  } //end loop
  p.update();
  rooms[activeRow][activeColumn].call();
  p.display();
  console.log("x:"+p.x)
  console.log("y:"+p.y)
}
