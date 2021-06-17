const initialState = {
  userProfile: {}
}

export default function userReducer(state= initialState, action){
  switch(action.type) {
    case "FETCH_USER":
      console.log("userReducer:", "fetchUser:", action.payload)
      return {...state, userProfile: action.payload}
    default:
      return state;
  }
}

