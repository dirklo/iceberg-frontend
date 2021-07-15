import { combineReducers } from "redux";
import authReducer from "../reducers/auth";
import usersSlice from "./user";
import foodsSlice from './food';
import hobbiesSlice from './hobby';


const initialState = { users: [], connectUsers: [] }

function appReducer(state=initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload };
    case "SEARCH_FOR_CONNECT":
      let filteredUsers = []
      if (action.payload.category === "Hobbies") {
      filteredUsers = [ ...state.users.filter(u => u.hobbies.map(h => h.name).includes(action.payload.search)) ]
      } else if (action.payload.category === "Foods") {
      filteredUsers = [ ...state.users.filter(u => u.foods.map(f => f.name).includes(action.payload.search)) ]
      }
      return {...state, connectUsers: filteredUsers}
    default:
      return state;
  }
}

export default combineReducers({
  auth: authReducer,
  appReducer: appReducer,
  usersState: usersSlice,
  foodsState: foodsSlice,
  hobbiesState: hobbiesSlice
});
