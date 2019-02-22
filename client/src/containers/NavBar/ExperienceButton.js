import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import {graphql} from 'react-apollo';
import {getAllExperiencesQuery} from '../../queries/queries';

class ExperienceButton extends Component {
  render(){
    const styles = {
      buttonStyle: {
        width: '35px'
      },
      textParent: {
        position: 'relative',
        zIndex: '10'
      },
      text: {
        display: 'inline',
        paddingLeft: '5px',
        position: 'absolute',
        bottom: '0.1px',
        color: 'white'
      }
    };

    if (this.props.selectedExperienceCategory.length===this.props.categories.length) {
      return (<div style={[styles.textParent]}><img onClick={(e)=>this.props.unselectAllExperienceCategories()} src = {process.env.PUBLIC_URL+ 'icons/checked_checkbox.png'} style={[styles.buttonStyle]} alt='checked_checkbox'/><p style={[styles.text]}>My Professional Experiences</p></div>)
    } else {
      let data = this.props.data.experiences;
      return (<div style={[styles.textParent]}><img onClick={(e)=>{this.props.selectAllExperienceCategories(this.props.categories, data); this.props.unselectFunMode()}} src = {process.env.PUBLIC_URL+ 'icons/unchecked_checkbox.png'} style={[styles.buttonStyle]} alt='unchecked_checkbox'/><p style={[styles.text]}>My Professional Experiences</p></div>)
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(graphql(getAllExperiencesQuery)(Radium(ExperienceButton)))