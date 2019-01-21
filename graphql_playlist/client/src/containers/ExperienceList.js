import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import {getExperiencesQuery} from '../queries/queries';

class ExperienceList extends Component {
  
  displayExperiences = () =>{
    var data = this.props.data;
    if (data.loading){
      return (<div>Loading Experiences ...</div>);
    } else {
      return data.experiences.map(experience=>{
        return (<li key={experience.id}>{experience.position}; {experience.company.name}</li>)
      })
    }
  }
  
  render(){
    return (
        <div>
          <h2>Experience List</h2>
          <ul>{this.displayExperiences()}</ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(graphql(getExperiencesQuery)(ExperienceList))