import p5 from 'p5';

const BasicShapes = (sketchArgs:any) => (p:any) => {
  const sides = [0, 2, 3, 4, 5, 6, 7, 8, 16];
  const drawers : BasicShapeDrawer[] = [];
  const padding = 40;
  const spacing = 90;
  let counter = 0;

  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(sketchArgs.width, sketchArgs.height);
    p.strokeWeight(2);
    p.stroke('#393232');

    for (let i = 0; i < (sketchArgs.width - (2 * padding)); i += spacing) {
      for (let j = 0; j < (sketchArgs.height - (2 * padding)); j += spacing) {
        const dSides = sides[Math.floor(p.random(0, sides.length))];
        drawers.push(new BasicShapeDrawer(
          p,
          {
            x: padding + j,
            y: padding + i,
          },
          2,
          dSides,
        ));
      }
    }
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    let isDone = true;

    drawers.forEach((drawer) => {
      const oldPos = { ...drawer.drawPos };
      if (!drawer.isDone()) {
        drawer.step();
        isDone = false;
        if (counter !== 0) {
          p.line(oldPos.x, oldPos.y, drawer.drawPos.x, drawer.drawPos.y);
        }
      }
    });
    if (isDone) {
      console.log('Done!');
      p.noLoop();
    }
    counter += 1;
  };
};

export default BasicShapes;

class BasicShapeDrawer {
  counter = 0;

  done = false;

  sizeFactor = 200;

  drawPos: any;

  drawSpeed: number;

  sides: number;

  angle: number;

  s: p5;

  handDrawnForce: number;

  constructor(s:p5, drawPos:any, drawSpeed:number, sides:number, handDrawnForce = 0) {
    this.drawPos = drawPos;
    this.drawSpeed = drawSpeed;
    this.sides = sides;
    this.angle = (180 - (((this.sides - 2) * 180) / this.sides)) / 2;
    this.s = s;
    this.handDrawnForce = handDrawnForce;
  }

  step() {
    this.drawPos = this.calculateNewPos();

    if (
      this.counter === Math.floor(
        (this.sizeFactor + (1.33 * this.sides)) / (this.drawSpeed * this.sides),
      )
    ) {
      this.angle += 360 / this.sides;
      this.counter = 0;
    }
    this.counter += 1;

    if (
      (this.angle >= 360)
          || (this.sides === 2 && this.counter > this.sizeFactor * 0.15)
    ) {
      this.done = true;
    }
  }

  calculateNewPos() {
    const v = p5.Vector.fromAngle(this.s.radians(this.angle), this.drawSpeed);
    v.add(p5.Vector.fromAngle(this.s.radians(this.s.random() * 360)).mult(this.handDrawnForce));
    return {
      x: this.drawPos.x + v.x,
      y: this.drawPos.y + v.y,
    };
  }

  isDone() {
    return this.done;
  }
}
