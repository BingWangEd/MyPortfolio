import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import NavBarItem from './NavBarItem';

import ExperienceButton from './ExperienceButton';
import FunButton from './FunButton';

class NavBar extends Component {
  render(){
    const styles = {
      center: {
        margin: 'auto',
        width: '90%',
        paddingTop: '50px'
      },
      subexperience: {
        marginLeft: '35px'
      }
    };

    if (this.props.dataIsLoading) {
      return (<div style={[styles.center]}>Data Is Loading ...</div>)
    } else {
      return (
        <div style={[styles.center]}>
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