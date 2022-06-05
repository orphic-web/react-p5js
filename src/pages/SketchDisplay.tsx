import { Alert, Container } from '@mui/material';
import p5 from 'p5';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import sketches from '../sketches/Sketches';
import './SketchDisplay.css';

const SketchDisplay: React.FC = () => {
  const { sketchId } = useParams();
  const sketchConf = sketches.find((s) => s.id === sketchId);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const [canvasWrapperWidth, setCanvasWrapperWidth] = useState(1000);
  const [canvasWrapperHeight, setCanvasWrapperHeight] = useState(1000);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let cleanup = () => {};
    if (canvasWrapperRef.current && sketchConf && sketchConf.sketch) {
      // eslint-disable-next-line new-cap
      const myP5 : any = new p5(
        sketchConf.sketch(sketchConf.sketchArgs),
        canvasWrapperRef.current,
      );
      cleanup = myP5.remove;
    }

    return cleanup;
  }, []);

  useEffect(() => {
    getCanvasSize();
    window.addEventListener('resize', getCanvasSize);
  }, []);

  const getCanvasSize = () => {
    if (canvasWrapperRef.current) {
      setCanvasWrapperWidth(window.innerWidth);
      setCanvasWrapperHeight(window.innerHeight);
    }
  };

  return (
    <>
      {sketchConf && <div className="sketch-display" style={{
        padding: sketchConf.fullScreen ? '0' : '20px 0',
        backgroundColor: sketchConf.backgroundColor ? sketchConf.backgroundColor : 'inherit',
      }}>
        <Container disableGutters={!!sketchConf.fullScreen} maxWidth={sketchConf.fullScreen ? false : 'lg'}>
          <>
            {(sketchConf.showHeader && !sketchConf.fullScreen)
        && <div className="sketch-header" style={{
          color: sketchConf.headerColor ? sketchConf.headerColor : 'inherit',
        }}>
          <h1>{sketchConf?.title}</h1>
        </div>}
            <div className="canvas-wrapper">
              <div className="canvas-container"
                ref={canvasWrapperRef}>
              </div>
            </div>
            {(sketchConf.minDimensions
          && canvasWrapperWidth
          && canvasWrapperHeight
          && (canvasWrapperWidth < sketchConf.minDimensions.width || canvasWrapperHeight < sketchConf.minDimensions.height))
          && <Alert severity="info" style={{ position: 'fixed', bottom: 50, right: 20 }}>Screen too small</Alert>
            }
          </>
        </Container>
      </div>}
    </>
  );
};

export default SketchDisplay;
