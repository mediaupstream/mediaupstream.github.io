const W = 800;
const H = 800;
const WEIGHT = 20;
const START_DELAY = 100;
let FONT;
let SPEED = 200;

function preload() {
  FONT = loadFont("Consolas.ttf");
}

function setup() {
  createCanvas(W, H, WEBGL);
  background(255);

  textFont(FONT);
  normalMaterial();
}

function draw() {
  orbitControl();
  
  if (frameCount >= START_DELAY) {
    rotateY((frameCount - START_DELAY) / SPEED);
  }
  background("white");
  push();
  translate(-150, 0, 0);
  drawPumpkin();
  pop();
}

function drawPumpkin() {
  const w = W / 2;
  const h = H / 2;
  drawPart(0, 0, w, h);

  drawPart(140, 0, w, h);
  drawPart(-140, 0, w, h);

  push();
  translate(0, 0, 0);
  rotateY(radians(90));
  stroke(color(0, 255, 0));
  rect(-25, -225, 50, 80);
  pop();

  drawLogs();
}

function drawLogs() {
  push();
  translate(20, -20, 40);
  textSize(100);
  fill("black");
  text(
    "LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
    -150,
    15
  );
  text("OOOGS", -150, 115);
  pop();

  push();
  translate(20, -20, 39.5);
  textSize(100);
  fill('white');
  text("LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", -150, 15);
  text("OOOGS", -150, 115);
  pop()


  push();
  rotateY(radians(180));
  translate(20, -125, 40);
  textSize(100);
  fill('black');
  text("AXIOM", -150, 125);
  pop();

  push();
  rotateY(radians(180));
  translate(20, -125, 39.5);
  textSize(100);
  fill('white');
  text("AXIOM", -150, 125);
  pop();
}

function drawPart(x = 0, y = 0, offsetX = 0, offsetY = 0) {
  strokeWeight(WEIGHT);
  stroke(color(255, 204, 0));
  noFill();
  ellipse(x / 2, y / 2, 750 / 3, 650 / 2);
}
