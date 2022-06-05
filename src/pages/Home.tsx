import { Container, Tabs, Tab } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Tags from '../models/Tags';
import sketches from '../sketches/Sketches';
import './Home.css';

const Home: React.FC = () => {
  const [sketchesToDisplay, setSketchesToDisplay] = useState(sketches);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (tabValue === 0) {
      setSketchesToDisplay(sketches);
    } else {
      const filteredSketches = sketches.filter((sketch) => sketch.tags && sketch.tags.includes(Object.values(Tags)[tabValue]));
      setSketchesToDisplay(filteredSketches);
    }
  }, [tabValue]);

  return (
    <div className="home">
      <Container>
        <>
          <div className="home-header">
            <h1>Sketch Library</h1>
          </div>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            className="sketches-tabs"
          >
            {Object.values(Tags).map((tag:string, index:number) => (
              <Tab key={index} label={tag} />
            ))}
          </Tabs>
          <div className="sketches-container">
            {sketchesToDisplay && sketchesToDisplay.map((sketch:any, key:number) => (
              <Link to={`/sketch/${sketch.id}`} key={key} className="sketch-card" style={{ textDecoration: 'none' }}>
                <div className="card-img" style={{ backgroundImage: `url('${sketch.thumbnailUrl}')` }}></div>
                <div className="card-body">
                  {sketch.title}
                </div>
              </Link>
            ))}
          </div>
        </>
      </Container>
      <div className="footnote">
        Made with
        <FavoriteBorderOutlinedIcon fontSize="small" style={{ margin: '0 5px' }}/>
        by <a href="https://orphic.ca" style={{ margin: '0 5px', color: 'var(--primary)', textDecoration: 'none' }}>Orphic</a>
      </div>
    </div>
  );
};

export default Home;
