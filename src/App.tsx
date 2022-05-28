import React from 'react';
import './App.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import themeConfig from './theme/ThemeConfig';
import Home from './pages/Home';
import SketchDisplay from './pages/SketchDisplay';

function App() {
  const theme = createTheme(themeConfig);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sketch/:sketchId" element={<SketchDisplay />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
