import { baseUrl } from './urlhelper'
import { fetchHobbies, addHobbies } from '../reducers/hobby'
import { updateHobbies, deleteHobbies } from '../reducers/user'

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
            dispatch(fetchHobbies(hobbiesJson))
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
      body: JSON.stringify({hobbies: info.items})
    }).then(async (res) => {
      if(res.ok){
        return res
          .json()
          .then (resJson => {
            dispatch(updateHobbies(resJson.added))
            dispatch(addHobbies(resJson.created))
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
    
    return fetch(`${baseUrl}/users/${info.userId}/usershobby/${info.items}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        "content-type": 'application/json'
      },
    }).then(async (res) => {
      if(res.ok){
        dispatch(deleteHobbies(info.items))
      } else {
        return res.json()
          .then(errors => {
            return Promise.reject(errors.message)
          })
      }
    })    
  }
}
