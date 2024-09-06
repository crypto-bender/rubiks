import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CanvasContainer from './components/CanvasContainer';
// import Box from './components/Box';
import { Canvas } from '@react-three/fiber';
import CubeHolder from './components/CubeHolder';

function App() {
  return (
    <div id="threeContainer">
      <CanvasContainer cube={<CubeHolder />}></CanvasContainer>
    </div>
  );
}

export default App;
