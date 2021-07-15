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

// export default function usersState(state= initialState, action){
//   switch(action.type) {
//     case "FETCH_USER":
//       return {...state, userProfile: action.payload}
//     case "ADD_TO_USER_FOODS":
//       return {
//         ...state,
//         userProfile: {
//         ...state.userProfile,
//           foods: [
//             ...state.userProfile.foods,
//             ...action.payload
//           ]
//         }
//       }
//     case "DELETE_USER_FOOD":
//       let usersFoods = state.userProfile.foods.filter((food) => {
//           const result = action.payload.find(toDelete => toDelete === food.id)
//         return result === undefined
//       })
//       return {
//         ...state,
//         userProfile: {
//           ...state.userProfile,
//           foods: [...usersFoods]
//         }
//       }
//     case "ADD_TO_USER_HOBBIES":
//       return {
//         ...state,
//         userProfile: {
//         ...state.userProfile,
//           hobbies: [
//             ...state.userProfile.hobbies,
//             ...action.payload
//           ]
//         }
//       }
//     case "DELETE_USER_HOBBY":
//       let usersHobbies = state.userProfile.hobbies.filter((hobby) => {
//         const result = action.payload.find(toDelete => toDelete === hobby.id)
//       return result === undefined
//     })
//     return {
//       ...state,
//       userProfile: {
//         ...state.userProfile,
//         hobbies: [...usersHobbies]
//       }
//     }
//     default:
//       return state;
//   }
// }

