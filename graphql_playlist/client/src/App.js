import React, { Component } from 'react';
import {connect} from 'react-redux';
import Radium, {StyleRoot} from 'radium';
import { Route, Switch, withRouter } from 'react-router-dom';
import ExperienceList from './containers/ExperienceList';



class App extends Component {
  render() {
    return (
      
        <StyleRoot>
          <div className="App">
            <h1>My Portfolio</h1>
            <ExperienceList /> 
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