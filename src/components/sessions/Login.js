import React from 'react';

function Login(){
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="username">User Name</label> <br />
        <input name="username" type="text" /><br /><br />
        <label htmlFor="password">password</label> <br />
        <input name="password" type="password" /><br /><br />
      </form>
    </div>
  )
}

export default Login;