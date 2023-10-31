const W = 800;
const H = 800;
const WEIGHT = 20;

let FONT;

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
  rotateY(frameCount / 300);
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
  translate(0, 0, 10);
  stroke(color(0, 255, 0));
  rect(-15, -225, 30, 80);
  pop();

  drawLogs();
}

function drawLogs() {
  push();
  translate(20, -20, 20);
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
  fill("white");
  noStroke();
  translate(-150, -80, -20);
  rect(0, 0, 290, 80);
  pop();

  push();
  rotateY(radians(180));
  translate(20, -125, 40);
  textSize(100);
  fill(color(255, 204, 0));
  text("AXIOM", -150, 115);
  pop();
}

function drawPart(x = 0, y = 0, offsetX = 0, offsetY = 0) {
  strokeWeight(WEIGHT);
  stroke(color(255, 204, 0));
  noFill();
  ellipse(x / 2, y / 2, 750 / 3, 650 / 2);
}
