const graphql = require('graphql');
const _ = require('lodash');
const Organization = require('../models/organization');
const Experience = require('../models/experience');
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLEnumType} = graphql;

const ExperienceCategoryEnumType = new GraphQLEnumType({
  name: 'ExperienceCategoryEnum',
  values: {
    "SOFTWARE_DEVELOPMENT": {value: "Software Development"},
    "DATA_ANALYSIS": {value: "Data Analysis"},
    "PROJECT_MANAGEMENT": {value: "Project Management"},
    "CREATIVE": {value: "Creative"},
    "PROFESSIONAL_WRITING": {value: "Professional Writing"},
    "TEACHING": {value: "Teaching"},
    "CURRICULUM_DESIGN": {value: "Curriculum Design"},
    "EDUCATION": {value: "Education"}
  }
});

const OrganizationType = new GraphQLObjectType({
  name: 'Organization',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    city: {type: GraphQLString},
    description: {type: GraphQLString},
    link: {type: GraphQLString},
    experiences: {
      type: new GraphQLList(ExperienceType),
      resolve(parent, args){
        //return _.filter(experiences, {OrganizationId: parent.id})
        return Experience.find({organizationId: parent.id})
      }
    }
  })
});

const ExperienceType = new GraphQLObjectType({
  name: 'Experience',
  fields: ()=>({
    id: {type: GraphQLID},
    position: {type: GraphQLString},
    degree: {type: GraphQLString},
    startDate: {type: GraphQLString},
    endDate: {type: GraphQLString},
    category: {type: ExperienceCategoryEnumType},
    story: {type: GraphQLString},
    organization: {
      type: OrganizationType,
      resolve(parent, args){
        //return _.find(companies, {id: parent.companyId})
        return Organization.findById(parent.organizationId)
      }
    },
    allCategories: {
      type: new GraphQLList(GraphQLString),
      resolve(parent, args){
        return ExperienceCategoryEnumType._values.map(e => {
          return e.value
        })
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    organization: {
      type: OrganizationType,
      args: {id: {type: GraphQLID}},
      resolve: async(parent, args) => {
        const foundOrganization = await Organization.findById(args.id);
        if (!foundOrganization){
          throw new Error('Organization not found')
        }
        return foundOrganization;
      }

      // resolve(parent, args){
      //   //return _.find(companies, {id: args.id})
      //   return Organization.findById(args.id);
      // }
    },
    experience: {
      type: ExperienceType,
      args: {id: {type: GraphQLID}},
      resolve: async(parent, args) => {
        const foundExperience = await Experience.findById(args.id);
        if (!foundExperience){
          throw new Error('Experience not found')
        }
        return foundExperience;
      }

      // resolve(parent, args){
      //   //return _.find(experiences, {id: args.id})
      //   return Experience.findById(args.id);
      // }
    },
    organizations:{
      type: new GraphQLList(OrganizationType),
      resolve: async(parent, args) => {
        const foundOrganizations = await Organization.find({});
        if (!foundOrganizations){
          throw new Error('Organizations not found')
        }
        return foundOrganizations;
      }

      // resolve(parent, args){
      //   //return companies
      //   return Organization.find({})
      // }
    },
    experiences:{
      type: new GraphQLList(ExperienceType),
      resolve: async(parent, args) => {
        const foundExperiences = await Experience.find({});
        if (!foundExperiences){
          throw new Error('Experiences not found')
        }
        return foundExperiences;
      }

      // resolve(parent, args){
      //   //return experiences
      //   return Experience.find({})
      // }
    },
    experienceByCategory: {
      type: new GraphQLList(ExperienceType),
      args: {category: {type: GraphQLString}},
      resolve: async(parent, args) => {
        const foundExperience = await Experience.find({category: args.category});
        if (!foundExperience){
          throw new Error('Experience by the category not found')
        }
        return foundExperience;
      }

      // resolve(parent, args){
      //   return Experience.find({category: args.category})
      // }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addOrganization:{
      type: OrganizationType,
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        city: {type: GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString},
        link: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let organization = new Organization({
          name: args.name,
          city: args.city,
          description: args.description,
          link: args.link
        });
        return organization.save()
      }
    },
    addExperience:{
      type: ExperienceType,
      args: {
        position: {type: GraphQLString},
        degree: {type: GraphQLString},
        startDate: {type: GraphQLNonNull(GraphQLString)},
        endDate: {type: GraphQLNonNull(GraphQLString)},
        organizationId: {type: GraphQLNonNull(GraphQLID)},
        category: {type: new GraphQLNonNull(ExperienceCategoryEnumType)},
        story: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let experience = new Experience({
          position: args.position,
          degree: args.degree,
          startDate: args.startDate,
          endDate: args.endDate,
          organizationId: args.organizationId,
          category: args.category,
          story: args.story
        });
        return experience.save()
      }
    },
    updateExperience: {
      type: ExperienceType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        position: {type: GraphQLString},
        degree: {type: GraphQLString},
        startDate: {type: GraphQLString},
        endDate: {type: GraphQLString},
        organizationId: {type: GraphQLID},
        category: {type: ExperienceCategoryEnumType},
        story: {type: GraphQLString}
      },
      resolve(parent, args){
        const experience = Experience.findByIdAndUpdate(args.id, args);
        if (!experience) {
          throw new Error('Experience not found by updateSkill.')
        }
        return experience;
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})