import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radium, {StyleRoot} from 'radium';
import {withRouter} from 'react-router-dom';
import NavBarContainer from './containers/NavBar/NavBarContainer';
import TimelineContainer from './containers/Timeline/TimelineContainer.js';
import HomeImage from './containers/Home/HomeImage.js';

class App extends Component {

  render() {
    return (
        <StyleRoot>
          <div className="App">
              <NavBarContainer />
              <HomeImage />
              <TimelineContainer />
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