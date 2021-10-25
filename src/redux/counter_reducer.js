function counterReducer (state=0, action){
  console.log(state,action)
  const {type,data} = action
  console.info(data)
  switch(type){
    case 'counter/incremented':
      state = state+1
      return state
      case 'counter/decremented':
        state = state-1;
       return state
      default:
        return state
  }

}

export default counterReducer