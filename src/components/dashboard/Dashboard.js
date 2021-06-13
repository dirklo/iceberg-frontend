import React from 'react';
import { connect } from 'react-redux'

function Dashboard({ currentUser }){
  console.log(currentUser)
  return(
    <div>
      <h1>Dashboard</h1>
      <h2>current User is: {currentUser ? currentUser.username : 'none'}</h2>
    </div>
  )
}

export default connect(state => {
  return {
    currentUser: state.auth.currentUser
  }
})(Dashboard);