import React from 'react';
import './App.css';
import {
  createTheme, CssBaseline, ThemeProvider,
} from '@mui/material';
import {
  Route, Routes,
} from 'react-router-dom';
import SketchDisplay from './pages/SketchDisplay';
import Home from './pages/Home';
import themeConfig from './theme/ThemeConfig';
import Menu from './components/Menu';

function App() {
  const theme = createTheme(themeConfig);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sketch/:sketchId" element={<SketchDisplay />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Menu />
      </div>
    </ThemeProvider>
  );
}

export default App;
