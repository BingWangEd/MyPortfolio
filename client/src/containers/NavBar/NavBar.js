import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import NavBarItem from './NavBarItem';

import ExperienceButton from './ExperienceButton';
import FunButton from './FunButton';

let menuOpen = true;

class NavBar extends Component {
  render(){
    const styles = {
      center: {
        marginLeft: '50px',
        width: '40%',
        paddingTop: '50px',
        position: 'relative',
        height: '500px'
      },
      contentWrapper: {
        display: 'inline-block',
        width: '100%',
        position: 'absolute'
      },
      subexperience: {
        marginLeft: '35px'
      },
      slideLeft: {
        position: 'absolute',
        top: '50px',
        right: '0',
        zIndex: '20'
      },
      slideRight: {
        position: 'absolute',
        top: '50px',
        left: '0',
        zIndex: '20'
      },
      slideIcon: {
        width: '35px'
      }
    };

    let openMenu = () => {
      menuOpen = true;
      this.forceUpdate();
    }

    let closeMenu = () => {
      menuOpen = false;
      this.forceUpdate();
    }

    let slideButton = menuOpen ? 
      (<div style={[styles.slideLeft]} onClick={()=>{closeMenu()}}><img 
        style={[styles.slideIcon]}
        src = {process.env.PUBLIC_URL+ 'icons/slide_left.png'}
        alt='slide left'/></div>) : 
      (<div style={[styles.slideRight]} onClick={()=>{openMenu()}}><img 
        style={[styles.slideIcon]}
        src = {process.env.PUBLIC_URL+ 'icons/slide_right.png'}
        alt='slide right'/></div>)

    if (this.props.dataIsLoading) {
      return (
        <div style={[styles.center]}>
          <div>Data Is Loading ...</div>
        </div>)
    } else {
      return (
        <div style={[styles.center]}>
          {slideButton}
          <div style={[styles.contentWrapper, menuOpen ? {left: 0} : {left: '-100%'}]}>
            <ExperienceButton 
              categories = {this.props.categories}
              selectAllExperienceCategories = {this.props.selectAllExperienceCategories}
              unselectAllExperienceCategories = {this.props.unselectAllExperienceCategories}
              unselectFunMode = {this.props.unselectFunMode}
              updateExperienceData = {this.props.updateExperienceData}
            />
            <div style={[styles.subexperience]}>
            {this.props.categories.map((category, index)=>{
              return (
                <NavBarItem 
                  key={index} 
                  category = {category} 
                  selectExperienceCategory={this.props.selectExperienceCategory} 
                  unselectExperienceCategory={this.props.unselectExperienceCategory}
               />)
            })}
            </div>
            <FunButton 
              selectFunMode = {this.props.selectFunMode}
              unselectFunMode = {this.props.unselectFunMode}
              unselectAllExperienceCategories = {this.props.unselectAllExperienceCategories}
              updateExperienceData = {this.props.updateExperienceData}
            />
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(NavBar))