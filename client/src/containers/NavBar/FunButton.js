import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import {getExperienceByCategoryQuery} from '../../queries/queries';

class FunButton extends Component {
  render(){
    const styles = {
      buttonStyle: {
        width: '35px'
      },
      textParent: {
        position: 'relative'
      },
      text: {
        display: 'inline',
        paddingLeft: '5px',
        position: 'absolute',
        bottom: '0.1px',
        color: 'white'
      }
    };
    
    if (this.props.funMode) {
      return (<div style={[styles.textParent]}><img style={[styles.buttonStyle]} onClick={(e)=>{this.props.unselectFunMode();}} src = {process.env.PUBLIC_URL+ 'icons/checked_checkbox.png'} alt='checked_checkbox'/><p style={[styles.text]}>Show Me Something Fun!</p></div>)
    } else {
      return (<div style={[styles.textParent]}><img style={[styles.buttonStyle]}
           onClick={(e)=>{
            this.props.selectFunMode();
            this.props.unselectAllExperienceCategories();
          }}
          src = {process.env.PUBLIC_URL+ 'icons/unchecked_checkbox.png'}
          alt='unchecked_checkbox'/><p style={[styles.text]}>Show Me Something Fun!</p></div>)
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(FunButton))