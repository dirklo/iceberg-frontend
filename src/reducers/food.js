import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  foods: [],
  foodsLoaded: false
}

const foodsSlice = createSlice({
  name: 'foods',
  initialState: initialState,
  reducers: {
    fetchFoods(state, action){
      state.foods = action.payload
    },
    addFoods(state, action){
      state.foods.push(...action.payload)
    }
  }
})

export const { fetchFoods, addFoods } = foodsSlice.actions
export default foodsSlice.reducer

// export default function foodsState(state= initialState, action){
//   switch(action.type) {
//     case "FETCH_FOODS":
//       return {...state, foodsLoaded: true, foods: [...action.payload]}
//     case "ADD_FOODS":
//      return {...state, foods: [...state.foods, ...action.payload]}
//     default:
//       return state;
//   }
// }