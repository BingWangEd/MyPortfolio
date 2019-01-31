import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radium, {StyleRoot} from 'radium';
import {withRouter} from 'react-router-dom';
import ExperienceList from './containers/ExperienceList';
import AddCompany from './containers/AddCompany';
import SearchExperience from './containers/SearchExperience';
import ProjectDetails from './containers/ProjectDetails';

class App extends Component {
  render() {
    return (
        <StyleRoot>
          <div className="App">
            
          </div>
        </StyleRoot>

    );
  }
}

function mapStateToProps(state){
  return state
}

export default withRouter(connect(
  mapStateToProps
)(Radium(App)))