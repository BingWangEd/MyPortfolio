import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';

class ExperienceButton extends Component {
  render(){
    if (this.props.selectedExperienceCategory.length===this.props.categories.length) {
      return (<div><img onClick={(e)=>this.props.unselectAllExperienceCategories()} src = {process.env.PUBLIC_URL+ 'icons/checked_checkbox.png'} alt='checked_checkbox'/>My Professional Experiences</div>)
    } else {
      return (<div><img onClick={(e)=>{this.props.selectAllExperienceCategories(this.props.categories); this.props.unselectFunMode()}} src = {process.env.PUBLIC_URL+ 'icons/unchecked_checkbox.png'} alt='unchecked_checkbox'/>My Professional Experiences</div>)
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(ExperienceButton))