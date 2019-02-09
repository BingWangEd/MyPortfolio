import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radium, {StyleRoot} from 'radium';
import {withRouter} from 'react-router-dom';
import NavBarContainer from './containers/NavBar/NavBarContainer';
import TimelineContainer from './containers/Timeline/TimelineContainer.js';

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
              <TimelineContainer />
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