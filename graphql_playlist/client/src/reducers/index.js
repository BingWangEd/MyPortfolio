let reducer = function (state, action){
  switch (action.type){
    case 'UPDATE_COMPANY':
      console.log(action.type)
      return Object.assign({}, state, {
         company: action.company
      })
    case 'UPDATE_COMPANY_NAME':
      console.log(action.type)
      return Object.assign({}, state, {
         companyName: action.name
      })
    case 'UPDATE_COMPANY_CITY':
      console.log(action.type)
      return Object.assign({}, state, {
         companyCity: action.city
      })
    default:
      return state;
  }
}

export default reducer;