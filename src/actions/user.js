import { baseUrl } from './urlhelper'

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
            dispatch({type: "FETCH_USER", payload: userJson});
        })
      } else {
        return res.json().then((errors) => {
          return Promise.reject(errors.status.message)
        })
      }
    })
  }
}
export{getUser}