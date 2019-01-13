let reducer = function (state, action){
  switch (action.type){
    case 'HELLO':
      return Object.assign({}, state, {
         HELLO: null
      })
    default:
      return state;
  }
}

export default reducer;