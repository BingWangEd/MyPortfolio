import React, {Component} from 'react';
import {connect} from 'react-redux';
import {graphql, compose} from 'react-apollo';
import {getCompaniesQuery, getExperiencesQuery, addCompanyMutation} from '../queries/queries';
import {updateCompanyName, updateCompanyCity, selectCompany} from '../actions/index';
import ProjectDetails from './ProjectDetails';

class AddCompany extends Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.addCompanyMutation({
      variables: {
        name: this.props.companyName,
        city: this.props.companyCity
      },
      refetchQueries: [{query: getCompaniesQuery}]
    });
  }

  displayCompanies = () => {
    var data = this.props.getCompaniesQuery;
    if (data.loading){
      return (<h3>Loading companies</h3>)
    } else {
      return data.companies.map(company=>{
        return (<div key={company.id} onClick={(e)=>{e.preventDefault(); this.props.selectCompany(company.id);}}>{company.name}, {company.city}</div>)
      })
    }
  }

  render(){
    return (
        <div>
            <form>
            <label>
              Company Name:
              <input type="text" name="name" onChange={(e)=>this.props.updateCompanyName(e.target.value)}/>
            </label>
            <label>
              City:
              <input type="text" name="name" onChange={(e)=>this.props.updateCompanyCity(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" onClick={(e)=>this.submitForm(e)}/>
            </form>
            {this.displayCompanies()}
        </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default compose(
  connect(
    mapStateToProps,
    {updateCompanyName, updateCompanyCity, selectCompany}
  ),
  graphql(getCompaniesQuery, {name: "getCompaniesQuery"}),
  graphql(addCompanyMutation, {name: "addCompanyMutation"})
)(AddCompany);