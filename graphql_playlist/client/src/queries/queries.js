import {gql} from 'apollo-boost';

const getCompaniesQuery=gql`
{
  companies{
    name,
    city,
    id
  }
}
`

const getExperiencesQuery=gql`
{
  experiences{
    position,
    startDate
    company{
      name
    },
    id
  }
}
`

const addCompanyMutation=gql`
  mutation($name: String!, $city:String!){
    addCompany(name:$name, city:$city){
      name,
      city
    }
  }
`

const addExperienceMutation=gql`
  mutation{
    addExperience(position:"", startDate:"", company: ""){
      position,
      startDate,
      id
    }
  }
`

export {getCompaniesQuery, getExperiencesQuery, addCompanyMutation, addExperienceMutation};