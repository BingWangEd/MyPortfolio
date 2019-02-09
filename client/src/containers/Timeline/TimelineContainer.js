import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExperienceItem from './ExperienceItem';

class TimelineContainer extends Component {
  render(){
    return (
        <div>
          <h2>Timeline Here</h2>
          {this.props.experiences.map((experience, index)=>{
            return <ExperienceItem 
            key={index}
            experience={experience}/>
          })}
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(TimelineContainer)