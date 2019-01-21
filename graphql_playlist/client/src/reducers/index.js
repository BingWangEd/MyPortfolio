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
    default:
      return state;
  }
}

export default reducer;