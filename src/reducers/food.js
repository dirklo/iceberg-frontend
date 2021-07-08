export const initialState = {
  foods: [],
  foodsLoaded: false
}

export default function foodsState(state= initialState, action){
  switch(action.type) {
    case "FETCH_FOODS":
      return {...state, foodsLoaded: true, foods: action.payload}
    case "ADD_FOOD_TO_FOODS":
      return {...state, foods: [...state.foods, action.payload]}
    case "ADD_FOODS":
      let newFoods = state.foods
      for(let i = 0; i < action.payload.length; i++)  {
        newFoods.push(action.payload[i])
      }
     return {...state, foods: newFoods}
    default:
      return state;
  }
}