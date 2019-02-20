import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExperienceItem from './ExperienceItem';

class TimelineContainer extends Component {
  render(){
    return (
        <div>
          {this.props.experiences.map((experience, index)=>{
            return (<ExperienceItem 
              key={index}
              experience={experience}
              num={index}
            />)
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