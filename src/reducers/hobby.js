
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