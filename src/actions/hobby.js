import { baseUrl } from './urlhelper'

export const getHobbies = () => {
  return async (dispatch) => {
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

export const addToUserHobbies = (info) => {
  return async(dispatch) => {
    return fetch(`${baseUrl}/users/${info.userId}/usershobby`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "content-type": 'application/json'
      },
      body: JSON.stringify({hobbies: info.hobbies})
    }).then(async (res) => {
      if(res.ok){
        return res
          .json()
          .then (resJson => {
            dispatch({type: "ADD_TO_USER_HOBBIES", payload: resJson.added})
            dispatch({type: "ADD_HOBBIES", payload: resJson.created})
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

export const deleteUserHobby = (info) => {
  return async(dispatch) => {
    
    return fetch(`${baseUrl}/users/${info.userId}/usershobby/${info.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        "content-type": 'application/json'
      },
    }).then(async (res) => {
      if(res.ok){
        dispatch({type: "DELETE_USER_HOBBY", payload: info.id})
      } else {
        return res.json()
          .then(errors => {
            return Promise.reject(errors.message)
          })
      }
    })    
  }
}
