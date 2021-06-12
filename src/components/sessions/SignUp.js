import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signupUser } from '../../actions/auth'


function Login({ signupUser }){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState(null)

  const history = useHistory()

  function handleLogin(e) {
    e.preventDefault()
    signupUser({
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email, 
      password: password
    })
    .then(res => {
      if (res.payload.status.code === 200) {
        history.push('/login')
      } else {
        setError(res)
      }
    })
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <div>{error ? error : null}</div>
      <form action="" onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="first-name">First Name</label> <br />
        <input 
          name="first-name" 
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />
        <br /><br />
        <label htmlFor="last-name">Last Name</label> <br />
        <input 
          name="last-name" 
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <br /><br />
        <label htmlFor="username">username</label> <br />
        <input 
          name="username" 
          type="username" 
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
          />
          <br /><br />
        <label htmlFor="email">Email</label> <br />
        <input 
          name="email" 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          />
          <br /><br />
          <label htmlFor="password">Password</label> <br />
        <input 
          name="password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          />
          <br /><br />
        <label htmlFor="password-confirm">Password Confirmation</label> <br />
        <input 
          name="password-confirm" 
          type="password" 
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          required
          />
          <br /><br />
        <input type="submit" value="LOG IN"/>
      </form>
    </div>
  )
}

export default connect(null, { signupUser })(Login)