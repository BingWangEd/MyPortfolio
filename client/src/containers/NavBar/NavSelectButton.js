import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import {graphql} from 'react-apollo';
import {getExperienceByCategoryQuery} from '../../queries/queries';

class NavSelectButton extends Component {
  render(){
    const styles = {
      buttonStyle: {
        width: '35px',
        display: 'inline'
      }
    };

    if (this.props.selectedExperienceCategory.includes(this.props.category)) {
      return (<img style={[styles.buttonStyle]} onClick={(e)=>this.props.unselectExperienceCategory(this.props.category)} src = {process.env.PUBLIC_URL+ 'icons/checked_checkbox.png'} alt='checked_checkbox'/>)
    } else {
      const data = this.props.data.experienceByCategory;
      return (<img style={[styles.buttonStyle]} onClick={(e)=>{this.props.selectExperienceCategory(this.props.category, {data});}} src = {process.env.PUBLIC_URL+ 'icons/unchecked_checkbox.png'} alt='unchecked_checkbox'/>)
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