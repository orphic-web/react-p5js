import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import sketches from '../sketches/Sketches';

const Home: React.FC = () => (
  <div className="home">
    <Container>
      <>
        <h1>Home</h1>
        {sketches.map((sketch:any, key:number) => (
          <Link to={`/sketch/${sketch.id}`} key={key}>{sketch.id}</Link>
        ))}
      </>
    </Container>
  </div>
);

export default Home;
