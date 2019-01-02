var rgb = [];
var points = [];
var pause = false;
var _alpha = 0.05;
var _fill = false;

export default function sketch(p5js) {
  function P() {
    this.x = p5js.floor(p5js.random(100, p5js.windowWidth / 2 - 100));
    this.y = p5js.floor(p5js.random(100, p5js.windowHeight - 100));
    this.dir = p5js.floor(p5js.random(4));
    this.dX = p5js.floor(p5js.random(0, 1));
    this.dY = p5js.floor(p5js.random(0, 1));
    this.speedX = p5js.floor(p5js.random(2, 6));
    this.speedY = p5js.floor(p5js.random(2, 6));
  }

  function hitWall(p) {
    if (p.x < 0 || p.x > p5js.windowWidth / 2) p.dX = !p.dX;
    if (p.y < 0 || p.y > p5js.windowHeight) p.dY = !p.dY;
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

  p5js.setup = () => {
    p5js.resizeCanvas(p5js.windowWidth / 2, p5js.windowHeight);
    // p5js.background(p5js.color(255, 255, 255));
    rgb = [p5js.random(255), p5js.random(255), p5js.random(255)];

    for (let i = 0; i < Math.floor(3 + Math.random() * 30); i++) {
      points.push(new P());
    }
    p5js.strokeJoin(p5js.ROUND);
  };

  p5js.windowResized = () => {
    p5js.resizeCanvas(p5js.windowWidth / 2, p5js.windowHeight);
  };

  p5js.keyPressed = () => {
    if (p5js.keyCode === p5js.RETURN) pause = !pause;
    if (p5js.keyCode == p5js.UP_ARROW) decreaseAlpha(false);
    if (p5js.keyCode == p5js.DOWN_ARROW) decreaseAlpha(true);
    if (p5js.keyCode == p5js.LEFT_ARROW) points = removePoints(points);
    if (p5js.keyCode == p5js.RIGHT_ARROW) points = addPoints(points);
    if (p5js.keyCode == 70) _fill = !_fill;
  };

  p5js.draw = () => {
    if (pause) return;
    if (p5js.frameCount % 3 == 0) {
      rgb = rgb.map((c, i) => {
        return (c + p5js.random(1, i)) % 255;
      });
    }

    p5js.background(p5js.color("rgba(197,175,164," + _alpha + ")"));

    if (_fill) {
      p5js.fill(rgb[0], rgb[1], rgb[2]);
    } else {
      p5js.noFill();
    }
    p5js.stroke(rgb[0], rgb[1], rgb[2]);
    p5js.strokeWeight(3);

    p5js.beginShape();
    points.forEach(function(p) {
      p = movePoint(hitWall(p));
      p5js.vertex(p.x, p.y);
    });
    p5js.endShape(p5js.CLOSE);
  };
}
