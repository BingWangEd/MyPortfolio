import {gql} from 'apollo-boost';

const getCategoriesQuery=gql`
{
  experiences{
    allCategories
  }
}
`

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

const getCompanyQuery=gql`
  query($id: ID){
    company(id: $id){
      id,
      name,
      city,
      experiences{
        id,
        position,
        startDate
      }
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

const getExperiencesByCategoryQuery=gql`
{
  experiencesByCategories($category: [String]!){
    position,
    startDate,
    endDate,
    company{
      name,
      city
    },
    skills {
      summary
      detail
    }
  }
}
`

export {getCompaniesQuery, getExperiencesQuery, getCompanyQuery, addCompanyMutation, addExperienceMutation, getCategoriesQuery, getExperiencesByCategoryQuery};