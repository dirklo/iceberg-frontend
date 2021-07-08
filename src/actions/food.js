import { baseUrl } from './urlhelper'
// import { createAction, createReducer } from '@reduxjs/toolkit'



export const getFoods = () => {
  console.log("getFoods:")
  return async (dispatch) => {
    console.log("willFetch Foods")
    return fetch(`${baseUrl}/foods`,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "content-type": 'application/json'
      }
    }).then(async (res) => {
      if(res.ok){
        return res
          .json()
          .then((foodsJson) =>{
            console.log("will dispatch foods", foodsJson);
            dispatch({type: "FETCH_FOODS", payload:foodsJson});
          })
      } else {
        return res.json()
          .then((errors) =>{
            return Promise.reject(errors.message)
          })
      }
    })
  }
}


export const addToUserFoods = (info) => {
  console.log("addToUserFoods", info, `${baseUrl}/users/${info.userId}/usersfood`);
  return async(dispatch) => {
    console.log(info, "will fetch")
    return fetch(`${baseUrl}/users/${info.userId}/usersfood`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "content-type": 'application/json'
      },
      body: JSON.stringify({foods: info.foods})
    }).then(async (res) => {
      console.log("here")
      if(res.ok){
        return res
          .json()
          .then (resJson => {
            //dispatch here
            console.log("resJson:", resJson)
            dispatch({type: "ADD_TO_USER_FOODS", payload: resJson.added})
            dispatch({type: "ADD_FOODS", payload: resJson.created})
          })
      } else {
        return res.json()
          .then(errors => {
            return Promise.reject(errors.message)
          })
      }
    })    
  }
}
