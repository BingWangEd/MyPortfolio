const MonthsEnum = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "Jun":6, "Jul":7, "Aug":8, "Sep":9, "Oct":10, "Nov":11, "Dec":12,}
Object.freeze(MonthsEnum)

const compareExperiencesDates = (exp1, exp2) => {
  const date1 = exp1.startDate.split(' ');
  const date2 = exp2.startDate.split(' ');
  const year1 = parseInt(date1[1]);
  const year2 = parseInt(date2[1]);
  const month1 = date1[0];
  const month2 = date2[0];
  if (year1===year2){
    if (MonthsEnum[month1]>MonthsEnum[month2])
      return 1
    else if (MonthsEnum[month1]===MonthsEnum[month2])
      return 0
    else 
      return -1
  } else {
    if (year1>year2)
      return 1
    else
      return -1
  }
}

let reducer = function (state, action){
  switch (action.type){
    case 'UPDATE_COMPANY':
      return Object.assign({}, state, {
         company: action.company
      })
    case 'UPDATE_COMPANY_NAME':
      return Object.assign({}, state, {
         companyName: action.name
      })
    case 'UPDATE_COMPANY_CITY':
      return Object.assign({}, state, {
         companyCity: action.city
      })
    case 'SELECT_COMPANY':
      return Object.assign({}, state, {
         selectedCompanyId: action.selectedCompanyId
      })
    case 'SELECT_EXPERIENCE_CATEGORY':
      let experiences = state.experiences.concat(action.newExperiences.data)
      experiences=experiences.sort(compareExperiencesDates)
      return Object.assign({}, state, {
         selectedExperienceCategory: state.selectedExperienceCategory.concat([action.selectedExperienceCategory]),
         experiences: experiences
      })
    case 'UNSELECT_EXPERIENCE_CATEGORY':
      const newExperiences = state.experiences.filter(e=>{
          const left = e.category.toLowerCase().replace('_', ' ')
          const right = action.unselectedExperienceCategory.toLowerCase();
          return left !== right
        })
      return Object.assign({}, state, {
         selectedExperienceCategory: state.selectedExperienceCategory.filter(i=>i!==action.unselectedExperienceCategory),
         experiences: newExperiences
      })
    case 'UNSELECT_ALL_EXPERIENCE_CATEGORIES':
      return Object.assign({}, state, {
         selectedExperienceCategory: [],
         experiences: []
      })
    case 'SELECT_ALL_EXPERIENCE_CATEGORIES':
      return Object.assign({}, state, {
         selectedExperienceCategory: action.experienceCategories
      })
    case 'SELECT_FUN_MODE':
    case 'UNSELECT_FUN_MODE':
      return Object.assign({}, state, {
         funMode: action.ifSelectFunMode
      })
    default:
      return state;
  }
}

export default reducer;