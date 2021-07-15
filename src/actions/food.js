import { baseUrl } from './urlhelper'
import { updateFoods, deleteFoods } from '../reducers/user'
import { fetchFoods, addFoods } from '../reducers/food'

export const getFoods = () => {
  return async (dispatch) => {
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
            dispatch(fetchFoods(foodsJson));
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
  return async(dispatch) => {
    return fetch(`${baseUrl}/users/${info.userId}/usersfood`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "content-type": 'application/json'
      },
      body: JSON.stringify({foods: info.items})
    }).then(async (res) => {
      if(res.ok){
        return res
          .json()
          .then (resJson => {
            dispatch(updateFoods(resJson.added))
            dispatch(addFoods(resJson.created))
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

export const deleteUserFood = (info) => {
  return async(dispatch) => {
    return fetch(`${baseUrl}/users/${info.userId}/usersfood/${info.items}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        "content-type": 'application/json'
      }
    }).then(async (res) => {
      if(res.ok){
        dispatch(deleteFoods(info.items))
      } else {
        return res.json()
          .then(errors => {
            return Promise.reject(errors.message)
          })
      }
    })    
  }
}

