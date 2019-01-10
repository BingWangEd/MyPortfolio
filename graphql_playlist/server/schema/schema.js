const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList} = graphql;


var companies = [
  {name: 'Cheng & Tsui', city:'Boston, MA', id: '1'},
  {name: 'Latin School of Chicago', city:'Chicago, IL', id: '2'},
  {name: 'ThinkCERCA', city:'Chicago, IL', id: '3'},
  {name: 'DMM Eikaiwa', city:'Tokyo, Japan', id: '4'},
]

var experiences = [
  {
    position: 'Project Developer and Manager', 
    startDate: '2014/07/01',
    id: "1",
    companyId: "1"
  },
  {
    position: 'Teacher', 
    startDate: '2016/08/01',
    id: "2",
    companyId: "2"
  },
  {
    position: 'Software Engineer', 
    startDate: '2017/12/10',
    id: "3",
    companyId: "4"
  },
  {
    position: 'Data Analyst', 
    startDate: '2017/06/15',
    id: "4",
    companyId: "4"
  }
]

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    city: {type: GraphQLString},
    experiences: {
      type: new GraphQLList(ExperienceType),
      resolve(parent, args){
        return _.filter(experiences, {companyId: parent.id})
      }
    }
  })
});

const ExperienceType = new GraphQLObjectType({
  name: 'Experience',
  fields: ()=>({
    id: {type: GraphQLID},
    position: {type: GraphQLString},
    startDate: {type: GraphQLString},
    company: {
      type: CompanyType,
      resolve(parent, args){
        return _.find(companies, {id: parent.companyId})
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    company: {
      type: CompanyType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(companies, {id: args.id})
      }
    },
    experience: {
      type: ExperienceType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(experiences, {id: args.id})
      }
    },
    companies:{
      type: new GraphQLList(CompanyType),
      resolve(parent, args){
        return companies
      }
    },
    experiences:{
      type: new GraphQLList(ExperienceType),
      resolve(parent, args){
        return experiences
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery 
})