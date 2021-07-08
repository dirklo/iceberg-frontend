
export const initialState = {
  hobbies: [],
  hobbiesLoaded: false
}

export default function hobbiesState(state= initialState, action){
  switch(action.type) {
    case "FETCH_HOBBIES":
    return {...state, hobbiesLoaded: true, hobbies: action.payload}
    case "ADD_HOBBY_TO_HOBBIES":
    return {...state, hobbies: [...state.hobbies, action.payload]}
    default:
      return state;
  }
}