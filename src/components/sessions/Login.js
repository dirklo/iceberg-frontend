import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../actions/auth';
import LandingPgWrapper from './LandingPgWrapper';
import btnStyles from '../button/button.module.css';
import { Link } from 'react-router-dom';

function Login({ loginUser }){
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

  // (function debug() {
  //   document.addEventListener('click', (e) => {
  //     console.log(e.target)
  //   })
  // })()

  return (
    <LandingPgWrapper>
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
        <input className={`${btnStyles.Btn} ${btnStyles["Primary-inverse"]}`} type="submit" value="Login"/>
        <Link className={`${btnStyles.Btn} ${btnStyles["Secondary-inverse"]}`} to="/signup">Sign up</Link>
      </form>
    </LandingPgWrapper>
  )
}

export default connect(null, { loginUser })(Login);