import { baseUrl } from './urlhelper'
// import { createAction, createReducer } from '@reduxjs/toolkit'
// import { addHobby } from '../reducers/hobby'

export const getHobbies = () => {
  console.log("getHobbies:")
  return async (dispatch) => {
    console.log("willFetch Hobbies")
    return fetch(`${baseUrl}/hobbies`,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "content-type": 'application/json'
      }
    }).then((res) => {
      if(res.ok){
        return res
          .json()
          .then((hobbiesJson) =>{
            console.log("will dispatch hobbies", hobbiesJson);
            dispatch({type: "FETCH_HOBBIES", payload:hobbiesJson})
          })
      } else {
        return res.json()
          .then((errors) =>{
            return Promise.reject(errors.status.message)
          })
      }
    })
  }
}

// export const addToHobbies = createAction('hobbies/addHobby');

export const addToHobbies = (hobby) => {
  return (dispatch) => {
    dispatch({type: "ADD_HOBBY_TO_HOBBIES", payload:hobby})
  }
}
