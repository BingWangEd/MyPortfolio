import React from 'react';
import Radium from 'radium';
import './Experience.css';

const styles = {
  slide: {
    backgroundImage: 'url(\'https://lorempixel.com/640/480/abstract/6/\')',
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

const ExperienceItem = (experience) => (
  <div style={[styles.slide]} className='slide'>
    <div>
      <h3>{experience.experience.organization.name}</h3>
      <h1>{experience.experience.story}</h1>
    </div>
  </div>
)

export default Radium(ExperienceItem);


