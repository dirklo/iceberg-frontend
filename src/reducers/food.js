import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  foods: [],
  foodsLoaded: false
}

const foodsSlice = createSlice({
  name: 'foods',
  initialState: initialState,
  reducers: {
    fetchFoods(state, action){
      console.log("action", action.payload);
      state.foods = action.payload
      state.foodsLoaded = true
    },
    addFoods(state, action){
      state.foods.push(...action.payload)
    }
  }
})

export const { fetchFoods, addFoods } = foodsSlice.actions
export default foodsSlice.reducer