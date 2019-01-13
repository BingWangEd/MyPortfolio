import React, {Component} from 'react';
import {connect} from 'react-redux';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getExperiencesQuery=gql`
{
  experiences{
    position,
    company{
      name
    }
  }
}
`

class ExperienceList extends Component {
  render(){
    console.log(this.props)
    return (
        <div>
          <h2>Experience List</h2>
          <ul></ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

const mapQueriesToProps = ({ props, state }) => {
  return {
    data: {
      query: getExperiencesQuery
    }
  }
}

// export default connect(
//   mapStateToProps
// )(ExperienceList)

export default graphql(getExperiencesQuery)(ExperienceList)