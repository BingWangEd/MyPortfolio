import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import NavBarList from './NavBarList'

class NavBar extends Component {
  render(){
    if (this.props.dataIsLoading) {
      return (<div>Data Is Loading ...</div>)
    } else {
      return (
        this.props.categories.map((category, index)=>{
          return (<NavBarList key={index} category = {category} selectExperienceCategory={this.props.selectExperienceCategory}/>)
        })
      )
    }
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(Radium(NavBar))