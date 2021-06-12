import React, { useState } from 'react';

const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

function Login({ setCurrentUser }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    .then(res => res.json())
    .then(json => console.log(json))
  }

  return (
    <div>
      <h1>Login</h1>
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
    </div>
  )
}

export default Login;