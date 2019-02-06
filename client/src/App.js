import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radium, {StyleRoot} from 'radium';
import {withRouter} from 'react-router-dom';
import ExperienceList from './containers/ExperienceList';
import SearchExperience from './containers/SearchExperience';
import ProjectDetails from './containers/ProjectDetails';

import NavBarContainer from './containers/NavBar/NavBarContainer';

const styles = {
  center: {
    backgroundColor: 'gray'
  }
};

class App extends Component {
  render() {
    return (
        <StyleRoot>
          <div className="App">
            <div style={[styles.center]}>
              <NavBarContainer />
            </div>
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