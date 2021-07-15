import { baseUrl } from './urlhelper'
import { fetchUser } from '../reducers/user'

const getUser = (id) => {
  return async (dispatch) => {
    return fetch(`${baseUrl}/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }).then((res) =>{
      if(res.ok){
        return res 
          .json()
          .then((userJson) => {
            dispatch(fetchUser(userJson));
        })
      } else {
        return res.json().then((errors) => {
          return Promise.reject(errors.message)
        })
      }
    })
  }
}
export{ getUser }