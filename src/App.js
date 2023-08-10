import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css';

const image1 = "https://via.placeholder.com/1500";
const image2 = "https://via.placeholder.com/1800";
const image3 = "https://via.placeholder.com/2100";

const App = () => {
  return (
    <div className="App">
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <h1>First Parallax Layer</h1>
        </div>
      </Parallax>
      <h2>Normal Content Here</h2>
      <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <h1>Second Parallax Layer</h1>
        </div>
      </Parallax>
      <Parallax bgImage={image3} strength={-200}>
        <div style={{ height: 500 }}>
          <h1>Third Parallax Layer</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default App;
