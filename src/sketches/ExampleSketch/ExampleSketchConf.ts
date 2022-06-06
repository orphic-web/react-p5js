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
  thumbnailUrl: 'https://firebasestorage.googleapis.com/v0/b/react-p5-55d7e.appspot.com/o/flowing-dots-screenshot.png?alt=media&token=606b8a99-57cf-424d-8006-4823703d6be2',
};

export default ExampleSketchConf;
