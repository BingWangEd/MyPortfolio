import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import {getCategoriesQuery} from '../../queries/queries';
import {selectExperienceCategory, unselectExperienceCategory, selectAllExperienceCategories, unselectAllExperienceCategories} from '../../actions/index';
import NavBar from './NavBar';


class NavBarContainer extends Component {
  render(){
    let data = this.props.data;
    let categories = null;
    let dataIsLoading = true;

    if (!data.loading){
      categories = data.experiences[0].allCategories
      dataIsLoading = false;
    }
    return (
        <NavBar
          categories = {categories}
          dataIsLoading = {dataIsLoading}
          selectExperienceCategory = {this.props.selectExperienceCategory}
          unselectExperienceCategory = {this.props.unselectExperienceCategory}
          selectAllExperienceCategories = {this.props.selectAllExperienceCategories}
          unselectAllExperienceCategories = {this.props.unselectAllExperienceCategories}
        />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps, {selectExperienceCategory, unselectExperienceCategory, selectAllExperienceCategories, unselectAllExperienceCategories}
)(graphql(getCategoriesQuery)(NavBarContainer))