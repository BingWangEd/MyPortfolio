import React from 'react';
import Radium from 'radium';
import './Experience.css';

const styles = {
  slide: {
    overflow: 'hidden',
    color: 'white',
    zIndex: '2',
    padding: '25vh 10%',
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    boxShadow: '0 -1px 10px rgba(0, 0, 0, .7)',
    backgroundRepeat: 'cover', 
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position:'relative'
  },
  words: {
    width: '60%',
    paddingLeft: '35%',
    color: 'white'
  },
  category: {
    fontSize: '550%',
    position: 'absolute',
    opacity: '0.1',
    bottom: '-180px',
    left: 0
  },
  link: {
    // textDecoration: 'underline solid #FF634D',
    textDecoration: 'none',
    fontSize: '1.17em',
    color: 'white',
    zIndex: '25'
  },
  lineDeco: {
    borderLeft: '4px solid #FF634D',
    paddingLeft: '15px',
    marginBottom: '50px'
  }
};

const ExperienceItem = ({experience, isOdd}) => (
  <div style={[styles.slide, {backgroundImage: isOdd ? "url('"+ process.env.PUBLIC_URL +"Images/OrangeBackground.jpg')" : "url('"+ process.env.PUBLIC_URL +"Images/GrayBackground.jpg')"}]}>
    <div style={[styles.words]}>
      <div style={[styles.lineDeco]}>
        <a href={experience.organization.link} target="_blank" style={[styles.link]}><h3>{experience.organization.name}</h3></a>
        <p>{experience.startDate} - {experience.endDate}</p>
      </div>
      <h1>{experience.story}</h1>
    </div>
    <div style={[styles.category]}><h1>{experience.category}</h1></div>
  </div>
)

export default Radium(ExperienceItem);


