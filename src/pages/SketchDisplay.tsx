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
    window.addEventListener('resize', getCanvasSize);
  }, []);

  const getCanvasSize = () => {
    if (canvasWrapperRef.current) {
      setCanvasWrapperWidth(canvasWrapperRef.current.clientWidth);
      setCanvasWrapperHeight(canvasWrapperRef.current.clientHeight);
    }
  };

  return (
    <>
      {sketchConf && <div className="sketch-display" style={{
        backgroundColor: sketchConf.backgroundColor ? sketchConf.backgroundColor : 'inherit',
      }}>
        <Container style={{ position: 'relative' }}>
          <>
            {(sketchConf && sketchConf.showHeader)
        && <div className="sktech-header" style={{
          color: sketchConf.headerColor ? sketchConf.headerColor : 'inherit',
        }}>
          <h1>{sketchConf?.title}</h1>
        </div>}
            <div className="canvas-wrapper" style={{
              overflow: sketchConf.isResponsive ? 'auto' : 'hidden',
            }}
            ref={canvasWrapperRef}>
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
