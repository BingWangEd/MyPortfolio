import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import './Experience.css';

import { compose } from 'redux';
import sr from './ScrollReveal.js';

var comeInKeyFrames = Radium.keyframes({
  'to': {transform: 'translateY(0)'}
}, 'comeIn');

const styles = {
  slideEffect: {
    transform: 'translateY(150px)',
    animation: 'comeIn 0.8s ease forwards',
    animationName: comeInKeyFrames
  },
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
    backgroundSize: '120%',
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
  },
  trialDiv: {
    height: '500px',
    border: '5px solid black'
  }
};

class ExperienceItem extends Component {
  componentDidMount = () => {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.box1, config)
  }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.isInViewport, true);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.isInViewport);
  // }
    
  //myRef = React.createRef();
  
  // isInViewport = (offset = 0) => {
  //   if (!this.myRef) return false;
  //   const top = this.myRef.getBoundingClientRect().top;
  //   let result = (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  //   if (result) {console.log("%s %s", this.props.experience.organization.name,this.props.experience.position)}
  //   return result
  // }

  // isInViewport = (e) => {
  //   if (!this.myRef) return false;
  //   console.log(e)
  //   // const top = this.myRef.getBoundingClientRect().top;
  //   // let result = (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  //   // if (result) {console.log("%s %s", this.props.experience.organization.name,this.props.experience.position)}
  //   // return result
  // }
  

  render() {
    return (
      <section className='testimonial' id='testimonials'>
        <div className='row' ref='box1'>
      <div style={[styles.slide, {backgroundImage: this.props.isOdd ? "url('"+ process.env.PUBLIC_URL +"Images/OrangeBackground.jpg')" : "url('"+ process.env.PUBLIC_URL +"Images/GrayBackground.jpg')"}]}>
        <div style={[styles.words]}>
          <div style={[styles.lineDeco]}>
            <a href={this.props.experience.organization.link} target="_blank" style={[styles.link]}><h3>{this.props.experience.organization.name}</h3></a>
            <p>{this.props.experience.startDate} - {this.props.experience.endDate}</p>
          </div>
          <h1>{this.props.experience.story}</h1>
        </div>
        <div style={[styles.category]}><h1>{this.props.experience.category}</h1></div>
      </div>
      </div>
      </section>
    )
  }
}


function mapStateToProps(state){
  return state
}

const enhance = compose(
  connect(mapStateToProps, null),
  Radium
)

export default enhance(ExperienceItem)

// export default connect(
//   mapStateToProps
// )(Radium(ExperienceItem));