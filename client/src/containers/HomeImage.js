import React from 'react';
import Radium from 'radium';
import './Timeline/Experience.css';

const styles = {
  slide: {
    zIndex: '2',
    position: 'relative',
    
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    boxShadow: '0 -1px 10px rgba(0, 0, 0, .7)',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: '100%',
    backgroundPosition: 'center',
    position:'relative'
  },
  shade: {
    padding: '25vh 10%',
    backgroundColor: 'rgba(50, 50, 50, 0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: 'inherit'
  },
  quote: {
    width: '50%',
    paddingLeft: '35%',
    color: 'white'
  },
  header: {
    paddingBottom: '30px'
  },
  intro: {
    borderLeft: '4px solid #FF634D',
    paddingLeft: '15px'
  }
};

const HomeImage = () => (
  <div style={[styles.slide,  {backgroundImage: "url('"+ process.env.PUBLIC_URL +"Images/Teaching.jpg')"}]} className='slide'>
    <div style={[styles.shade]}>
      <div style={[styles.quote]}>
        <h1 style={[styles.header]}>I aspire to develop the best learning experience for students.</h1>
        <div style={[styles.intro]}>
          <p>Bing Wang</p>
          <p>EdTech Developer</p>
        </div>
      </div>
    </div>
  </div>
)

export default Radium(HomeImage);