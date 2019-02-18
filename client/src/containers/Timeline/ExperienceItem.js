import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import './Experience.css';

import { compose } from 'redux';
import ScrollReveal from './ScrollReveal.js';

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
    bottom: '-150px',
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
      duration: 800,
      delay: 150,
      distance: '300px',
      scale: 1.3,
      easing: 'ease',
    }

    ScrollReveal.reveal(this.refs.box1, config)
  }

  render() {
    let isOdd = this.props.num % 2 === 0
    return (
      <section className='testimonial' id='testimonials'>
        <div className='row' ref='box1'>
          <div style={[styles.slide, {backgroundImage: isOdd ? "url('"+ process.env.PUBLIC_URL +"Images/OrangeBackground.jpg')" : "url('"+ process.env.PUBLIC_URL +"Images/GrayBackground.jpg')"}]}>
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