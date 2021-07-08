import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  foods: [],
  foodsLoaded: false
}

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    fetchFoods(state, action){
      return {...state, foodsLoaded: true, foods: action.payload}
    }
  }
})

export const { fetchFoods } = foodSlice.actions

export default foodSlice.reducer

// export default function foodsState(state= initialState, action){
//   switch(action.type) {
//     case "FETCH_FOODS":
//     console.log("FETCH_FOODS")  
//     return {...state, foodsLoaded: true, foods: action.payload}
//     case "ADD_FOOD_TO_FOODS":
//     console.log("Payload:", action.payload, state)  
//     return {...state, foods: [...state.foods, action.payload]}
//     // , foods: [...state.foodsState.foods, action.payload]
//     default:
//       return state;
//   }
// }