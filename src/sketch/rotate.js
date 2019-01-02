// const isMobile = s => s < 630;
// const jitter = () => Math.floor((Math.random() * 255) % 255) - 50;
const getShape = () => {
  let shape;
  let i = Math.floor(Math.random() * 4);
  switch (i) {
    case 1:
      shape = "box";
      break;
    case 2:
      shape = "sphere";
      break;
    case 3:
      shape = "torus";
      break;
    default:
      shape = "plane";
  }
  return shape;
};

export default function sketch(p) {
  let shape = "plane";
  let seed = Math.random() * 100 - 50;
  let rotation = seed;
  let tick = 0;
  let thick = 0;
  let delta = 1;
  let pause = false;
  let up = true;

  p.setup = () => {
    // pause = isMobile(p.windowWidth) ? true : false;
    p.createCanvas(p.windowWidth / 4, p.windowHeight / 2, p.WEBGL);
    shape = getShape();
  };

  // p.windowResized = () => {
  //   const w = p.windowWidth
  //   pause = isMobile(w) ? true : false;
  //   p.resizeCanvas(pause ? w : w/2, p.windowHeight);
  // }

  p.myCustomRedrawAccordingToNewPropsHandler = props => {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
  };

  p.draw = function() {
    if (pause) return;

    if (delta > 4000) {
      delta = 0;
      let oldShape = `${shape}`;
      while (shape === oldShape) {
        shape = getShape();
      }
    }

    delta++;
    if (tick >= 255) {
      up = false;
      thick = 127;
    }
    if (tick <= 0) {
      up = true;
    }

    if (up) {
      tick++;
    } else {
      tick--;
    }

    p.noFill();
    p.stroke(p.color(tick, tick / 2, delta / 3, 140));
    p.strokeWeight(thick++);
    p.push();
    p.rotateY((rotation += 0.00001));
    p.rotateX((rotation += 0.001));
    p.rotateZ((rotation += 0.002));
    // p.box(seed + delta / 4);
    p[shape](seed + delta / 4);
    p.pop();
  };
}
