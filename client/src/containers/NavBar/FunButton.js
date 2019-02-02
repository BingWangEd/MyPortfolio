import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';

class FunButton extends Component {
  render(){
    if (this.props.selectedExperienceCategory.includes(this.props.category)) {
      return (<div><img onClick={(e)=>{this.props.unselectFunMode();}} src = {process.env.PUBLIC_URL+ 'icons/checked_checkbox.png'} alt='checked_checkbox'/>Show Me Something Fun!</div>)
    } else {
      return (<div><img 
          onClick={(e)=>{
            this.props.unselectFunMode();
            this.props.unselectAllExperienceCategories();
          }}
          src = {process.env.PUBLIC_URL+ 'icons/checked_checkbox.png'}
          alt='checked_checkbox'/>Show Me Something Fun!</div>)
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(FunButton))