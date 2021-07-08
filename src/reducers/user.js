const initialState = {
  userProfile: {}
}

export default function usersState(state= initialState, action){
  switch(action.type) {
    case "FETCH_USER":
      return {...state, userProfile: action.payload}
    case "ADD_TO_USER_FOODS":
      let userProfile = [...state.userProfile.foods];
      for(let i=0; i<action.payload.length; i++) {
        userProfile.push(action.payload[i])
      }
      return {...state, userProfile: userProfile}
    case "DELETE_USER_FOOD":
    let usersFoods = state.userProfile.foods.filter((food) => food.id !== parseInt(action.payload))
      return {...state, userProfile: usersFoods}
    default:
      return state;
  }
}

