"use strict";

var rgb = [];
var points = [];
var pause = false;
var _alpha = 0.2;
var _fill = false;

function P() {
  this.x = floor(random(100, windowWidth - 100));
  this.y = floor(random(100, windowHeight - 100));
  this.dir = floor(random(4));
  this.dX = floor(random(0, 1));
  this.dY = floor(random(0, 1));
  this.speedX = floor(random(2, 6));
  this.speedY = floor(random(2, 6));
}

function hitWall(p) {
  if (p.x < 0 || p.x > windowWidth) p.dX = !p.dX;
  if (p.y < 0 || p.y > windowHeight) p.dY = !p.dY;
  return p;
}
function movePoint(p) {
  p.x += p.dX ? p.speedX : -p.speedX;
  p.y += p.dY ? p.speedY : -p.speedY;
  return p;
}
function removePoints(p) {
  if (p.length <= 1) return p;
  p.pop();
  return p;
}
function addPoints(p) {
  p.push(new P());
  return p;
}
function decreaseAlpha(d) {
  _alpha = d ? _alpha - 0.005 : _alpha + 0.005;
  if (_alpha < 0) _alpha = 0;
  if (_alpha > 1) _alpha = 1;
}

function setup() {
  resizeCanvas(windowWidth, windowHeight);
  background(color(255, 255, 255));
  rgb = [random(255), random(255), random(255)];

  for (let i = 0; i < 4; i++) {
    points.push(new P());
  }
  strokeJoin(ROUND);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === RETURN) pause = !pause;
  if (keyCode == UP_ARROW) decreaseAlpha(false);
  if (keyCode == DOWN_ARROW) decreaseAlpha(true);
  if (keyCode == LEFT_ARROW) points = removePoints(points);
  if (keyCode == RIGHT_ARROW) points = addPoints(points);
  if (keyCode == 70) _fill = !_fill;
}

function draw() {
  if (pause) return;
  if (frameCount % 3 == 0) {
    rgb = rgb.map((c, i) => {
      return (c + random(1, i)) % 255;
    });
  }

  background(color("rgba(255,255,255," + _alpha + ")"));

  if (_fill) {
    fill(rgb[0], rgb[1], rgb[2]);
  } else {
    noFill();
  }
  stroke(rgb[0], rgb[1], rgb[2]);
  strokeWeight(3);

  beginShape();
  points.forEach(function(p) {
    p = movePoint(hitWall(p));
    vertex(p.x, p.y);
  });
  endShape(CLOSE);
}
