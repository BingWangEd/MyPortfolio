import React from 'react';
import Radium from 'radium';
import './Experience.css';

const styles = {
  slide: {
    backgroundColor: 'rgba(50, 50, 50)',
    color: 'white',
    zIndex: '2',
    position: 'relative',
    padding: '25vh 10%',
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    boxShadow: '0 -1px 10px rgba(0, 0, 0, .7)',
    transformStyle: 'inherit',
    position: 'relative'
  },
  words: {
    width: '60%',
    paddingLeft: '35%',
    color: 'white'
  },
  category: {
    fontSize: '600%',
    position: 'absolute',
    opacity: '0.1'
  }
};

const ExperienceItem = (experience) => (
  <div style={[styles.slide]} className='slide'>
    <div style={[styles.words]}>
      <h3>{experience.experience.organization.name}</h3>
      <h1>{experience.experience.story}</h1>
    </div>
    <div style={[styles.category]}><h1>{experience.experience.category}</h1></div>
  </div>
)

export default Radium(ExperienceItem);


