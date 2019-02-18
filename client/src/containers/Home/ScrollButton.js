import React from 'react';
import Radium from 'radium';

let bounceKeyFrames = Radium.keyframes({
  '0%': {
    transform: 'translateY(0)'
  }, 
  '20%': {
    transform: 'translateY(0)'
  }, 
  '50%': {
    transform: 'translateY(0)'
  }, 
  '80%': {
    transform: 'translateY(0)'
  }, 
  '100%': {
    transform: 'translateY(0)'
  },
  '40%': {
    transform: 'translateY(-30px)'
  },
  '60%': {
    transform: 'translateY(-15px)'
  }
}, 'bounce')

const styles = {
  bounceEffect: {
    animation: 'bounce 2s infinite',
    animationName: bounceKeyFrames
  },
  buttonStyle: {
    width: '40px'
  },
  center: {
    marginBottom: '20px',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0)'
  }
};

const ScrollButton = () => (
  <div style={[styles.center]}>
    <div style={[styles.bounceEffect]}><img style={[styles.buttonStyle]} src = {process.env.PUBLIC_URL+ 'icons/scroll_down.png'} alt='scroll down'/></div>Scroll
  </div>
)

export default Radium(ScrollButton);