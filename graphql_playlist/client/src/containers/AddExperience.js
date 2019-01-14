import React, {Component} from 'react';
import {connect} from 'react-redux';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getCompaniesQuery=gql`
{
  companies{
    name,
    city,
    id
  }
}
`

class AddExperience extends Component {

  displayCompanies = () =>{
    var data = this.props.data;
    if (data.loading){
      return (<div>Loading Companies ...</div>);
    } else {
      return data.companies.map(company=>{
        return (<div key={company.id}><input type="checkbox" value={company.name} name={company.name} />{company.name}</div>)
      })
    }
  }

  render(){
    console.log(this.props)
    return (
        <div>
          <form>
            {this.displayCompanies()}
          </form>
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(
  mapStateToProps
)(graphql(getCompaniesQuery)(AddExperience))