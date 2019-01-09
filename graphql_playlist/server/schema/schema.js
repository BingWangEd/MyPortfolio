const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;


var companies = [
  {name: 'Cheng & Tsui', city:'Boston, MA', id: '1'},
  {name: 'Latin School of Chicago', city:'Chicago, IL', id: '2'},
  {name: 'ThinkCERCA', city:'Chicago, IL', id: '3'},
  {name: 'DMM Eikaiwa', city:'Tokyo, Japan', id: '4'},
]

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: ()=>({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    city: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    company: {
      type: CompanyType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args){
        return _.find(companies, {id: args.id})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery 
})