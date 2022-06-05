type Position = { x: number, y: number };

class Particle {
  p:any;

  position: Position;

  xoffset = 8;

  needsReset = false;

  constructor(p:any, position:Position) {
    this.p = p;
    this.position = position;
  }

  reset = (position:Position) => {
    this.position = position;
    this.needsReset = false;
  };

  updatePos = () => {
    this.position.x -= this.xoffset;
    if (this.position.x < 0) {
      this.needsReset = true;
    }
  };
}

export default Particle;
