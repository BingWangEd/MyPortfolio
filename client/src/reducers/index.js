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
      return Object.assign({}, state, {
         selectedExperienceCategory: state.selectedExperienceCategory.concat([action.selectedExperienceCategory])
      })
    case 'UNSELECT_EXPERIENCE_CATEGORY':
      return Object.assign({}, state, {
         selectedExperienceCategory: state.selectedExperienceCategory.filter(i=>i!==action.unselectedExperienceCategory)
      })
    case 'UNSELECT_ALL_EXPERIENCE_CATEGORIES':
      return Object.assign({}, state, {
         selectedExperienceCategory: []
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