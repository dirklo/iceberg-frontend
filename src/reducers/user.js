const initialState = {
  userProfile: {}
}

export default function usersState(state= initialState, action){
  let userProfile = []
  let ids
  switch(action.type) {
    case "FETCH_USER":
      return {...state, userProfile: action.payload}
    case "ADD_TO_USER_FOODS":
      userProfile = [...state.userProfile.foods];
      for(let i=0; i<action.payload.length; i++) {
        userProfile.push(action.payload[i])
      }
      return {...state, userProfile: userProfile}
    case "DELETE_USER_FOOD":
      ids = action.payload.split(",")
      let usersFoods = state.userProfile.foods.filter((food) => {
          const result = ids.find(toDelete => toDelete === food.id)
        return result === undefined
      })
      return {...state, userProfile: usersFoods}
    case "ADD_TO_USER_HOBBIES":
      userProfile = [...state.userProfile.hobbies];
      for(let i=0; i<action.payload.length; i++) {
        userProfile.push(action.payload[i])
      }
      return {...state, userProfile: userProfile}
    case "DELETE_USER_HOBBY":
      ids = action.payload.split(",")
      let userHobbies = state.userProfile.foods.filter((hobby) => {
        const result = ids.find(toDelete => toDelete === hobby.id)
        return result === undefined
      })
      return {...state, userProfile: userHobbies}
    default:
      return state;
  }
}

