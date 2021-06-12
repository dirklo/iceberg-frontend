import React, { useState } from 'react';
import { connect } from 'react-redux' 
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../actions/auth'


function Login({ loginUser, currentUser }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const history = useHistory()

  function handleLogin(e) {
    e.preventDefault()
    loginUser({email: email, password: password})
    .then(res => {
      if (res.status.code === 200) {
        history.push('/dashboard')
      } else {
        setError(res)
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

export default connect(state => {
  return {
    currentUser: state.auth.currentUser
  }
}, { loginUser })(Login);