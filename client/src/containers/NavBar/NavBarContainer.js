import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql, compose} from 'react-apollo';
import {getCategoriesQuery, getExperienceByCategoryQuery,getAllExperiencesQuery} from '../../queries/queries';
import {selectExperienceCategory, unselectExperienceCategory, selectAllExperienceCategories, unselectAllExperienceCategories, selectFunMode, unselectFunMode} from '../../actions/index';
import NavBar from './NavBar';

let ifLoaded = false

class NavBarContainer extends Component {

  render(){
    let data = this.props.getCategoriesQuery;
    let categories = null;
    let dataIsLoading = true;
    let experienceData = this.props.getAllExperiencesQuery;

    if (!data.loading){
      categories = data.experiences[0].allCategories
    }

    if (!ifLoaded && !experienceData.loading){
      this.props.selectAllExperienceCategories(categories, experienceData.experiences)
      ifLoaded = true
    }

    if (!data.loading && !experienceData.loading){
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
          selectFunMode = {this.props.selectFunMode}
          unselectFunMode = {this.props.unselectFunMode}
        />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default compose(
  connect(
    mapStateToProps,
    {selectExperienceCategory, unselectExperienceCategory, selectAllExperienceCategories, unselectAllExperienceCategories, selectFunMode, unselectFunMode}
  ),
  graphql(getCategoriesQuery, {name: "getCategoriesQuery"}),
  graphql(getAllExperiencesQuery, {name: "getAllExperiencesQuery"})
)(NavBarContainer);
