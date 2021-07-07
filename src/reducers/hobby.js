// import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  hobbies: [],
  hobbiesLoaded: false
}

// const hobbySlice = createSlice({
//   name: 'hobbies',
//   initialState,
//   reducers: {
//     fetchFoods(state, action){
//       return {...state, hobbiesLoaded: true, hobbies: action.payload}
//     },
//     addFood(state, action){
//       return {...state, hobbies: [...state.hobbies, action.payload]}
//     }
//   }
// })

// export const { fetchFoods, addFood } = hobbySlice.actions

// export default hobbySlice.reducer

export default function hobbiesState(state= initialState, action){
  switch(action.type) {
    case "FETCH_HOBBIES":
    console.log("FETCH_HOBBIES")  
    return {...state, hobbiesLoaded: true, hobbies: action.payload}
    case "ADD_HOBBY_TO_HOBBIES":
    console.log("Payload:", action.payload, state)  
    return {...state, hobbies: [...state.hobbies, action.payload]}
    // , hobbies: [...state.hobbiesState.hobbies, action.payload]
    default:
      return state;
  }
}