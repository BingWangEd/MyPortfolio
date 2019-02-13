import React from 'react';
import Radium from 'radium';
import './Timeline/Experience.css';

const styles = {
  slide: {
    zIndex: '2',
    position: 'relative',
    padding: '25vh 10%',
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    boxShadow: '0 -1px 10px rgba(0, 0, 0, .7)',
    transformStyle: 'inherit'
  }
};

const HomeImage = () => (
  <div style={[styles.slide,  {backgroundImage: "url('"+ process.env.PUBLIC_URL +"Images/Teaching.jpg')"}]} className='slide'>
    <div>
      <h1>I'm aspired to build and design the best learning experience for students.</h1>
    </div>
  </div>
)

export default Radium(HomeImage);