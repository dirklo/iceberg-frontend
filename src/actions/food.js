import { baseUrl } from './urlhelper'

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
        dispatch({type: "DELETE_USER_FOOD", payload: info.items})
      } else {
        return res.json()
          .then(errors => {
            return Promise.reject(errors.message)
          })
      }
    })    
  }
}

