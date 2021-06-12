import React, { useContext } from 'react';
import { AuthContext } from '../app/App'

function Dashboard(){
  const currentUser = useContext(AuthContext)

  return(
    <div>
      <h1>Dashboard</h1>
      <h2>current User is: {currentUser}</h2>
    </div>
  )
}
export default Dashboard;