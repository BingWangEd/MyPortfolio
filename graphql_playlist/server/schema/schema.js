const graphql = require('graphql');
const _ = require('lodash');
const Company = require('../models/company');
const Experience = require('../models/experience');
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    city: {type: GraphQLString},
    experiences: {
      type: new GraphQLList(ExperienceType),
      resolve(parent, args){
        //return _.filter(experiences, {companyId: parent.id})
        return Experience.find({companyId: parent.id})
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
        //return _.find(companies, {id: parent.companyId})
        return Company.findById(parent.companyId)
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
        //return _.find(companies, {id: args.id})
        return Company.findById(args.id);
      }
    },
    experience: {
      type: ExperienceType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        //return _.find(experiences, {id: args.id})
        return Experience.findById(args.id);
      }
    },
    companies:{
      type: new GraphQLList(CompanyType),
      resolve(parent, args){
        //return companies
        return Company.find({})
      }
    },
    companyByName: {
      type: CompanyType,
      args: {name: {type:GraphQLString}},
      resolve(parent, args){
        return Company.find({name: args.name})
      }
    },
    experiences:{
      type: new GraphQLList(ExperienceType),
      resolve(parent, args){
        //return experiences
        return Experience.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCompany:{
      type: CompanyType,
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        city: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let company = new Company({
          name: args.name,
          city: args.city
        });
        return company.save()
      }
    },
    addExperience:{
      type: ExperienceType,
      args: {
        position: {type: new GraphQLNonNull(GraphQLString)},
        startDate: {type: new GraphQLNonNull(GraphQLString) },
        companyId: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args){
        let experience = new Experience({
          position: args.position,
          startDate: args.startDate,
          companyId: args.companyId
        });
        return experience.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})