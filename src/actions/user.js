import { baseUrl } from './urlhelper'

export const getUser = (id) => {
  return async(dispatch => {
    return fetch(`${baseUrl}/${id}`,{
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
            dispatch({type: "GETUSER", payload: userJson});
        })
      } else {
        return res.json().then((errors) => {
          return Promise.reject(errors.status.message)
        })
      }
    })
  })
}