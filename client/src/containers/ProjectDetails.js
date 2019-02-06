import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import {getCompanyQuery} from '../queries/queries';

class ProjectDetails extends Component {
  displayExperienceDetails = () => {
    const company = this.props.data.company;
    if (company) {
      return(
        <div>
          <h2>{company.name}</h2>
          <ul>
            {
              company.experiences.map(experience=>{
                return (<div key={experience.id}><h3>{experience.position}</h3></div>)
              })
            }
          </ul>
        </div>
      )
    }
  }

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
)(graphql(getCompanyQuery, {
  options: (props)=>{
    return{
      variables:{
        id: props.selectedCompanyId
      }
    }
  }
})(ProjectDetails))