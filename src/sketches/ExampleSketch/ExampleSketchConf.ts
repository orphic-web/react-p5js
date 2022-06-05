import SketchModel from '../../models/SketchModel';
import ExampleSketch from './ExampleSketch';

const ExampleSketchConf : SketchModel = {
  id: 'example-sketch',
  sketch: ExampleSketch,
  sketchArgs: {
    width: 800,
    height: 600,
  },
  backgroundColor: '#333333',
  showHeader: true,
  title: 'Flowing dots',
  headerColor: '#FFFFFF',
  minDimensions: {
    width: 800,
    height: 600,
  },
};

export default ExampleSketchConf;
