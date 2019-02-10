import {gql} from 'apollo-boost';

const getCategoriesQuery=gql`
{
  experiences{
    allCategories
  }
}
`

const getOrganizationsQuery=gql`
{
  organizations{
    id,
    name,
    city,
    description,
    link,
    experiences{
      position,
      degree,
      startDate
    }
  }
}
`

const getAllExperiencesQuery=gql`
{
  experiences{
    position,
    startDate,
    endDate,
    organization{
      name,
      city,
      description,
      link
    },
    category,
    story,
    allCategories
  }
}
`

const getExperienceByCategoryQuery=gql`
query($category: String!){
  experienceByCategory(category: $category){
    position,
    startDate,
    endDate,
    organization{
      name,
      city,
      description,
      link
    },
    category,
    story
  }
}
`

export {getCategoriesQuery, getOrganizationsQuery, getAllExperiencesQuery, getExperienceByCategoryQuery};