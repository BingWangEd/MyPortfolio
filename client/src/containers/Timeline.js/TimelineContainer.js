import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import {getExperiencesByCategory} from '../queries/queries';

class TimelineContainer extends Component {


  render(){
    return (
        <div>
          <h2>Project Details Here</h2>
          {this.displayExperienceDetails()}
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(graphql(getExperiencesByCategory, {
  options: (props)=>{
    return{
      variables:{
        id: props.selectedCompanyId
      }
    }
  }
})(TimelineContainer))