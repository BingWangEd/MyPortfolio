import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import {graphql} from 'react-apollo';
import {getAllExperiencesQuery} from '../../queries/queries';

class ExperienceButton extends Component {
  render(){
    if (this.props.selectedExperienceCategory.length===this.props.categories.length) {
      return (<div><img onClick={(e)=>this.props.unselectAllExperienceCategories()} src = {process.env.PUBLIC_URL+ 'icons/checked_checkbox.png'} alt='checked_checkbox'/>My Professional Experiences</div>)
    } else {
      let data = this.props.data.experiences;
      return (<div><img onClick={(e)=>{this.props.selectAllExperienceCategories(this.props.categories, {data}); this.props.unselectFunMode()}} src = {process.env.PUBLIC_URL+ 'icons/unchecked_checkbox.png'} alt='unchecked_checkbox'/>My Professional Experiences</div>)
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(graphql(getAllExperiencesQuery)(ExperienceButton))