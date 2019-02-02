import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import {graphql} from 'react-apollo';
import {getCategoriesQuery} from '../../queries/queries';
import {selectExperienceCategory} from '../../actions/index';

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
        />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(graphql(getCategoriesQuery)(NavBarContainer))