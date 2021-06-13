import React from 'react';
import { connect } from 'react-redux'
import ConnectContainer from './ConnectContainer';
function Dashboard({ currentUser }){
  return(
    <div>
      <h1>Dashboard</h1>
      <ConnectContainer />
      <h2>current User is: {currentUser ? currentUser.username : 'none'}</h2>
    </div>
  )
}


export default connect(state => {
  return {
    currentUser: state.auth.currentUser
  }
})(Dashboard);

