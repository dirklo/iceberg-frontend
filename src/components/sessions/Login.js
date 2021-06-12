import React, { useState, useContext } from 'react';
import { AuthContext } from '../app/App'
import { setToken } from '../../helpers/authHelpers'


function Login({ setCurrentUser }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const currentUser = useContext(AuthContext)

  function handleLogin(e) {
    e.preventDefault()
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: {email: email, password: password}})
    })
    .then(res => {
        if (res.ok) {
          setToken(res.headers.get("Authorization"))
          res.json()
          .then((json) => setCurrentUser(json.data))
        } else {
          res.json()
          .then(json => setError(json.error))
        }
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <div>{error ? error : null}</div>
      <form action="" onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="email">Email</label> <br />
        <input 
          name="email" 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br /><br />
        <label htmlFor="password">Password</label> <br />
        <input 
          name="password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          />
          <br /><br />
        <input type="submit" value="LOG IN"/>
      </form>
      <div>
        Current User: <br />
        {currentUser ? currentUser.email : 'none'}
      </div>
    </div>
  )
}

export default Login;