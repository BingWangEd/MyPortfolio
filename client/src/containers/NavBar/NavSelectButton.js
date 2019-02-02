import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';

class NavSelectButton extends Component {
  render(){
    if (this.props.selectedExperienceCategory.includes(this.props.category)) {
      return (<img onClick={(e)=>this.props.unselectExperienceCategory(this.props.category)} src = {process.env.PUBLIC_URL+ 'icons/checked_checkbox.png'} alt='checked_checkbox'/>)
    } else {
      return (<img onClick={(e)=>this.props.selectExperienceCategory(this.props.category)} src = {process.env.PUBLIC_URL+ 'icons/unchecked_checkbox.png'} alt='unchecked_checkbox'/>)
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(NavSelectButton))