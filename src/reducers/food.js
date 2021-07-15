export const initialState = {
  foods: [],
  foodsLoaded: false
}

export default function foodsState(state= initialState, action){
  switch(action.type) {
    case "FETCH_FOODS":
      return {...state, foodsLoaded: true, foods: [...action.payload]}
    case "ADD_FOODS":
     return {...state, foods: [...state.foods, ...action.payload]}
    default:
      return state;
  }
}