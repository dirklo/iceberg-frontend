const initialState = {
  foods: [],
  foodsLoaded: false
}

export default function foodsState(state= initialState, action){
  switch(action.type) {
    case "FETCH_FOODS":
      return {...state, foodsLoaded: true, foods: action.payload.foods}
    case "ADD_FOOD_TO_FOODS":
    console.log("Payload:", action.payload, state)  
    return {...state, foods: [...state.foods, action.payload]}
    // , foods: [...state.foodsState.foods, action.payload]
    default:
      return state;
  }
}