import React from 'react';
import Radium from 'radium';
import '../Timeline/Experience.css';
import ScrollButton from './ScrollButton';

const styles = {
  slide: {
    zIndex: '2',
    position: 'relative',
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    boxShadow: '0 -1px 10px rgba(0, 0, 0, .7)',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  },
  shade: {
    backgroundColor: 'rgba(50, 50, 50, 0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100vh'
  },
  quote: {
    width: '50%',
    paddingLeft: '35%',
    color: 'white',
    marginTop: '25vh'
  },
  header: {
    paddingBottom: '30px',
    fontSize: '1.5em',
    '@media screen and (min-width: 900px)': {
      fontSize: '2em'
    }
  },
  intro: {
    borderLeft: '4px solid #FF634D',
    paddingLeft: '15px'
  }
};

const HomeImage = () => (
  <div style={[styles.slide,  {backgroundImage: "url('"+ process.env.PUBLIC_URL +"Images/Teaching.jpg')"}]}>
    <div style={[styles.shade]}>
      <div style={[styles.quote]}>
        <h1 style={[styles.header]}>I aspire to develop the best learning experience for students.</h1>
        <div style={[styles.intro]}>
          <p>Bing Wang</p>
          <p>EdTech Product Developer</p>
        </div>
      </div>
      <ScrollButton />
    </div>
  </div>
)

export default Radium(HomeImage);