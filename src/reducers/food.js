import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  foods: [],
  foodsLoaded: false
}

// const foodSlice = createSlice({
//   name: 'foods',
//   initialState,
//   reducers: {
//     fetchFoods(state, action){
//       return {...state, foodsLoaded: true, foods: action.payload}
//     },
//     addFoods(state, action){
//       // let newFoods = ...state
//       // console.log("addFoods State", action.payload)
//       // for(let i = 0; i < action.payload.length; i++) {
//       //   newFoods.push(action.payload[i])
//       // }
//       console.log("newFoods", state.foods, action.payload)
//       return {...state}
//     }
//   }
// })

// export const { fetchFoods, addFoods } = foodSlice.actions

// export default foodSlice.reducer

export default function foodsState(state= initialState, action){
  switch(action.type) {
    case "FETCH_FOODS":
     console.log("FETCH_FOODS")  
      return {...state, foodsLoaded: true, foods: action.payload}
    case "ADD_FOOD_TO_FOODS":
      console.log("Payload:", action.payload, state)  
      return {...state, foods: [...state.foods, action.payload]}
    case "ADD_FOODS":
      let newFoods = state.foods
      for(let i = 0; i < action.payload.length; i++)  {
        newFoods.push(action.payload[i])
      }
      console.log("ADD_FOODS", newFoods)
     return {...state, foods: newFoods}
    default:
      return state;
  }
}