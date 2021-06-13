import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ConnectForm from './ConnectForm'
import ConnectUsers from './ConnectUsers'
const ConnectContainer = () => {

  const dispatch = useDispatch()

  useEffect(() => 
    fetch("http://localhost:3001/users").then(resp => resp.json()).then(users => dispatch({type: "FETCH_USERS", payload: users}))
  )  
  return (
      <div id="connect-container">
        <h1>Connect</h1>
        <ConnectForm />
        <ConnectUsers />
      </div>
  )
}

export default ConnectContainer
