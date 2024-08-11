// src/App.js

import React from 'react';
import Toolbar from './Toolbar';

const App = () => {
  return (
    <div>
      <Toolbar />
      <div id="home"><h1>Home Section</h1></div>
      <div id="about"><h1>About Section</h1></div>
      <div id="services"><h1>Services Section</h1></div>
      <div id="portfolio"><h1>Portfolio Section</h1></div>
      <div id="pages"><h1>Pages Section</h1></div>
      <div id="blog"><h1>Blog Section</h1></div>
      <div id="contact"><h1>Contact Section</h1></div>
    </div>
  );
};

export default App;
