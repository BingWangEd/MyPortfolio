import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import {getCompaniesQuery} from '../queries/queries';
import {updateCompany} from '../actions/index';

class SearchExperience extends Component {
  displayCompanies = () =>{
    var data = this.props.data;
    if (data.loading){
      return (<div>Loading Companies ...</div>);
    } else {
      return data.companies.map(company=>{
        return (<div key={company.id}><input type="checkbox" value={company.name} name={company.name} onClick={(e)=>this.props.updateCompany(company.name)}/>{company.name}</div>)
      })
    }
  }

  render(){
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
  mapStateToProps,
  {updateCompany}
)(graphql(getCompaniesQuery)(SearchExperience))