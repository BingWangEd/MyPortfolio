import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import NavBarItem from './NavBarItem';

import ExperienceButton from './ExperienceButton';
import FunButton from './FunButton';

class NavBar extends Component {
  render(){
    if (this.props.dataIsLoading) {
      return (<div>Data Is Loading ...</div>)
    } else {
      return (
        <div>
        <ExperienceButton 
          categories = {this.props.categories}
          selectAllExperienceCategories = {this.props.selectAllExperienceCategories}
          unselectAllExperienceCategories = {this.props.unselectAllExperienceCategories}
        />
        {this.props.categories.map((category, index)=>{
          return (
            <NavBarItem 
              key={index} 
              category = {category} 
              selectExperienceCategory={this.props.selectExperienceCategory} 
              unselectExperienceCategory={this.props.unselectExperienceCategory}
           />)
        })}
        <FunButton />
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