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
      wrapper: {
        position: 'sticky',
        top: 0,
        zIndex: '9',
        width: '320px',
        paddingLeft: '35px',
        paddingTop: '35px',
        display: 'inline-block',
        float: 'left'
      },
      subexperience: {
        marginLeft: '35px'
      },
      slideIcon: {
        width: '35px',
        position: 'absolute',
        right: 0,
        zIndex: '20'
      }
    }

    let openMenu = () => {
      menuOpen = true;
      this.forceUpdate();
    }

    let closeMenu = () => {
      menuOpen = false;
      this.forceUpdate();
    }

    let slideButton = menuOpen ? 
      (<div onClick={()=>{closeMenu()}}><img 
        style={[styles.slideIcon]}
        src = {process.env.PUBLIC_URL+ 'icons/slide_left.png'}
        alt='slide left'/></div>) : 
      (<div onClick={()=>{openMenu()}}><img 
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
        <div style={[styles.wrapper, { marginLeft: menuOpen ? 0 : '-285px'}]}>
          {slideButton}
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