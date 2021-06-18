import { baseUrl } from './urlhelper'

const getUser = (id) => {
  console.log("getUser call:", baseUrl, id)
  return async (dispatch) => {
    console.log("will fetch")
    return fetch(`${baseUrl}/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }).then((res) =>{
      console.log("here")
      if(res.ok){
        console.log("res.ok")
        return res 
          .json()
          .then((userJson) => {
            console.log("userJson", userJson);
            dispatch({type: "FETCH_USER", payload: userJson});
        })
      } else {
        console.log("here")
        return res.json().then((errors) => {
          return Promise.reject(errors.status.message)
        })
      }
    })
  }
}
export{getUser}