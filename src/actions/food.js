import { baseUrl } from './urlhelper'

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
    }).then((res) => {
      if(res.ok){
        return res
          .json()
          .then((foodsJson) =>{
            console.log("will dispatch foods")
            dispatch({type: "FETCH_FOODS", payload:foodsJson})
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
