// src/Toolbar.js

import React from 'react';
import './Toolbar.css'; // Import CSS for styling

const Toolbar = () => {
  return (
    <nav className="toolbar">
      <ul className="toolbar-list">
        <li className="toolbar-item"><a href="#home">Home</a></li>
        <li className="toolbar-item"><a href="#about">About</a></li>
        <li className="toolbar-item"><a href="#services">Services</a></li>
        <li className="toolbar-item"><a href="#portfolio">Portfolio</a></li>
        <li className="toolbar-item"><a href="#pages">Pages</a></li>
        <li className="toolbar-item"><a href="#blog">Blog</a></li>
        <li className="toolbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Toolbar;
