import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql, compose} from 'react-apollo';
import {getCategoriesQuery, getAllExperiencesQuery} from '../../queries/queries';
import {selectExperienceCategory, unselectExperienceCategory, selectAllExperienceCategories, unselectAllExperienceCategories, selectFunMode, unselectFunMode} from '../../actions/index';
import NavBar from './NavBar';

let ifFirstTimeLoaded = false

class NavBarContainer extends Component {

  render(){
    let categoryData = this.props.getCategoriesQuery;
    let experienceData = this.props.getAllExperiencesQuery;
    let categories = null;
    let dataIsLoading = true;
    
    if (!categoryData.loading){
      categories = categoryData.experiences[0].allCategories
    }

    if (!ifFirstTimeLoaded && !experienceData.loading && !categoryData.loading){
      this.props.selectAllExperienceCategories(categoryData.experiences[0].allCategories, experienceData.experiences)
      ifFirstTimeLoaded = true
    }

    if (!categoryData.loading && !experienceData.loading && this.props.selectedExperienceCategory && this.props.experiences){
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
