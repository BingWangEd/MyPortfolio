import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import {graphql} from 'react-apollo';
import {getExperienceByCategoryQuery} from '../../queries/queries';

class NavSelectButton extends Component {
  updateData = () => {
    const data = this.props.data.experienceByCategory;
    console.log("update data");
    console.log(data);
  }

  render(){
    if (this.props.selectedExperienceCategory.includes(this.props.category)) {
      this.updateData();
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
)(graphql(getExperienceByCategoryQuery, {
  options: (props)=>{
    return{
      variables:{
        category: props.category
      }
    }
  }
})(Radium(NavSelectButton)))