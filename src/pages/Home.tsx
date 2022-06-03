import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import sketches from '../sketches/Sketches';
import './Home.css';

const Home: React.FC = () => (
  <div className="home">
    <Container>
      <>
        <div className="home-header">
          <h1>Home</h1>
        </div>
        <div className="sketches-container">
          {sketches.map((sketch:any, key:number) => (
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
  </div>
);

export default Home;
