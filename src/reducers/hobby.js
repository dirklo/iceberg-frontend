
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hobbies: [],
  hobbiesLoaded: false
}

const hobbiesSlice = createSlice({
  name: 'hobbies',
  initialState: initialState,
  reducers: {
    fetchHobbies(state, action){
      state.hobbies = action.payload
    },
    addHobbies(state, action){
      state.hobbies.push(...action.payload)
    }
  }
})

export const { fetchHobbies, addHobbies } = hobbiesSlice.actions
export default hobbiesSlice.reducer

// export default function hobbiesState(state= initialState, action){
//   switch(action.type) {
//     case "FETCH_HOBBIES":
//       return {...state, hobbiesLoaded: true, hobbies: [...action.payload]}
//     case "ADD_HOBBIES":
//       let newHobbies = state.hobbies
//       for(let i = 0; i < action.payload.length; i++)  {
//         newHobbies.push(action.payload[i])
//       }
//       return {...state, hobbies: [...newHobbies]}
//     default:
//       return state;
//   }
// }