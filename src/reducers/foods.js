const initialState = {
  foods: []
}

export default function foods(state= initialState, action){
  switch(action.type) {
    case "FETCH_FOODS":
      console.log("foods:", "fetchUser:", action.payload)
      return {...state, foods: action.payload}
    default:
      return state;
  }
}