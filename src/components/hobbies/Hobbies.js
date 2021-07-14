import React from 'react'
import { connect } from 'react-redux';
import AddHobby from './AddHobby'

function Hobbies (props){
  
  return (
    <div>
      <h1>Hobbies</h1>
      <AddHobby/>
    </div>
  )
}

export default connect(state => {
  return {
    hobbies: state.hobbiesState.hobbies,    
    userProfile: state.usersState.userProfile
  }
})(Hobbies);
