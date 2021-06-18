const initialState = {
  foods: [],
  foodsLoaded: false
}

export default function foods(state= initialState, action){
  switch(action.type) {
    case "FETCH_FOODS":
      console.log("foods:", "fetchFoods:", action.payload)
      return {...state, foodsLoaded: true, foods: action.payload.foods}
    default:
      return state;
  }
}