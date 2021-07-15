import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userProfile: {}
}

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers:{
    fetchUser(state, action){
      state.userProfile = action.payload
    },
    updateFoods(state, action){
      state.userProfile.foods.push(...action.payload)
    },
    deleteFoods(state, action){
      let usersFoods = state.userProfile.foods.filter((food) => {
          const result = action.payload.find(toDelete => toDelete === food.id)
        return result === undefined
      })
      state.userProfile.foods = usersFoods
    },
    updateHobbies(state, action) {
      state.userProfile.hobbies.push(...action.payload)
    },
    deleteHobbies(state, action){
      let usersHobbies = state.userProfile.hobbies.filter((hobby) => {
        const result = action.payload.find(toDelete => toDelete === hobby.id)
        return result === undefined
      })
      state.userProfile.hobbies = usersHobbies
    }
  }
})

export const { fetchUser, updateFoods, deleteFoods, updateHobbies, deleteHobbies }  = usersSlice.actions
export default usersSlice.reducer