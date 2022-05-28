import BasicShapes from './BasicShapes';
import TestSketch from './TestSketch';

const sketches = [
  {
    id: 'basic-shapes',
    sketch: BasicShapes,
    args: {
      width: 800,
      height: 800,
    },
  },
  {
    id: 'test-sketch',
    sketch: TestSketch,
    args: {
      width: 800,
      height: 800,
    },
  },
];

export default sketches;
