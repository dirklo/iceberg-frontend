
export const initialState = {
  hobbies: [],
  hobbiesLoaded: false
}

export default function hobbiesState(state= initialState, action){
  switch(action.type) {
    case "FETCH_HOBBIES":
      return {...state, hobbiesLoaded: true, hobbies: [...action.payload]}
    case "ADD_HOBBY_TO_HOBBIES":
      return {...state, hobbies: [...state.hobbies, action.payload]}
      case "ADD_HOBBIES":
        let newHobbies = state.hobbies
        for(let i = 0; i < action.payload.length; i++)  {
          newHobbies.push(action.payload[i])
        }
       return {...state, hobbies: [...newHobbies]}
    default:
      return state;
  }
}