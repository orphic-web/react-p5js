import SketchModel from '../../models/SketchModel';
import Tags from '../../models/Tags';
import fullScreenSketch from './fullScreenSketch';

const fullScreenSketchConf : SketchModel = {
  id: 'fullScreenSketch',
  sketch: fullScreenSketch,
  showHeader: false,
  title: 'Full screen sketch',
  fullScreen: true,
  tags: [Tags.FULLSCREEN],
  thumbnailUrl: 'https://firebasestorage.googleapis.com/v0/b/react-p5-55d7e.appspot.com/o/fullscreen-sketch-screenshot.png?alt=media&token=f104bd28-8dbc-4929-9052-a1c0728aef56',
};

export default fullScreenSketchConf;
