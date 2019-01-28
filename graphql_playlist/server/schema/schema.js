const graphql = require('graphql');
const _ = require('lodash');
const Company = require('../models/company');
const Experience = require('../models/experience');
const Education = require('../models/education');
const School = require('../models/school');
const Skill = require('../models/skill');
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLEnumType} = graphql;

const ExperienceCategoryEnumType = new GraphQLEnumType({
  name: 'ExperienceCategoryEnum',
  values: {
    "TEACHING": {value: "Teaching"},
    "CURRICULUM_DESIGN": {value: "Curriculum Desgin"},
    "WRITING": {value: "Writing"},
    "SOFTWARE_DEVELOPMENT": {value: "Software Development"},
    "DATA_ANALYSIS": {value: "Data Analysis"},
    "PROJECT_MANAGEMENT": {value: "Project Management"},
    "CREATIVE": {value: "Creative"},
    "FUN": {value: "Fun"}
  }
});

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    city: {type: GraphQLString},
    description: {type: GraphQLString},
    link: {type: GraphQLString},
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
    endDate: {type: GraphQLString},
    category: {type: ExperienceCategoryEnumType},
    company: {
      type: CompanyType,
      resolve(parent, args){
        //return _.find(companies, {id: parent.companyId})
        return Company.findById(parent.companyId)
      }
    },
    skills: {
      type: new GraphQLList(SkillType),
      resolve(parent, args){
        //return _.filter(experiences, {companyId: parent.id})
        return Skill.find({experienceId: parent.id})
      }
    }
  })
});

const SkillType = new GraphQLObjectType({
  name: 'Skill',
  fields: ()=>({
    summary: {type: GraphQLID},
    detail: {type: GraphQLString},
    experience: {
      type: ExperienceType,
      resolve(parent, args){
        return Experience.findById(parent.experienceId)
      }
    }
  })
});

const SchoolType = new GraphQLObjectType({
  name: 'School',
  fields: ()=>({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    city: {type: GraphQLString},
    educations: {
      type: new GraphQLList(EducationType),
      resolve(parent, args){
        //return _.filter(experiences, {companyId: parent.id})
        return Education.find({schoolId: parent.id})
      }
    }
  })
});

const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: ()=>({
    id: {type: GraphQLID},
    degree: {type: GraphQLString},
    startDate: {type: GraphQLString},
    endDate: {type: GraphQLString},
    school: {
      type: SchoolType,
      resolve(parent, args){
        return School.findById(parent.schoolId)
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
    school: {
      type: SchoolType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        //return _.find(companies, {id: args.id})
        return School.findById(args.id);
      }
    },
    education: {
      type: EducationType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        //return _.find(companies, {id: args.id})
        return Education.findById(args.id);
      }
    },
    skill: {
      type: SkillType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        //return _.find(companies, {id: args.id})
        return Skill.findById(args.id);
      }
    },
    companies:{
      type: new GraphQLList(CompanyType),
      resolve(parent, args){
        //return companies
        return Company.find({})
      }
    },
    experiences:{
      type: new GraphQLList(ExperienceType),
      resolve(parent, args){
        //return experiences
        return Experience.find({})
      }
    },
    schools:{
      type: new GraphQLList(SchoolType),
      resolve(parent, args){
        //return experiences
        return School.find({})
      }
    },
    educations:{
      type: new GraphQLList(EducationType),
      resolve(parent, args){
        //return experiences
        return Education.find({})
      }
    },
    skills:{
      type: new GraphQLList(SkillType),
      resolve(parent, args){
        //return experiences
        return Skill.find({})
      }
    },
    companyByName: {
      type: CompanyType,
      args: {name: {type:GraphQLString}},
      resolve(parent, args){
        return Company.find({name: args.name})
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
        city: {type: GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLNonNull(GraphQLString)},
        link: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let company = new Company({
          name: args.name,
          city: args.city,
          description: args.description,
          link: args.link
        });
        return company.save()
      }
    },
    addExperience:{
      type: ExperienceType,
      args: {
        position: {type: new GraphQLNonNull(GraphQLString)},
        startDate: {type: new GraphQLNonNull(GraphQLString)},
        endDate: {type: new GraphQLNonNull(GraphQLString)},
        companyId: {type: new GraphQLNonNull(GraphQLID)},
        category: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args){
        let experience = new Experience({
          position: args.position,
          startDate: args.startDate,
          endDate: args.endDate,
          companyId: args.companyId,
          category: args.category
        });
        return experience.save()
      }
    },
    addSchool:{
      type: SchoolType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        city: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let school = new School({
          school: args.school,
          city: args.city
        });
        return school.save()
      }
    },
    addEducation:{
      type: EducationType,
      args: {
        degree: {type: new GraphQLNonNull(GraphQLString)},
        startDate: {type: new GraphQLNonNull(GraphQLString)},
        endDate: {type: new GraphQLNonNull(GraphQLString)},
        schoolId: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args){
        let experience = new Experience({
          position: args.position,
          startDate: args.startDate,
          endDate: args.endDate,
          schoolId: args.schoolId
        });
        return experience.save()
      }
    },
    addSkill:{
      type: SkillType,
      args: {
        summary: {type: new GraphQLNonNull(GraphQLString)},
        detail: {type: new GraphQLNonNull(GraphQLString)},
        experienceId: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args){
        let skill = new Skill({
          summary: args.summary,
          detail: args.detail,
          experienceId: args.experienceId
        });
        return skill.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})