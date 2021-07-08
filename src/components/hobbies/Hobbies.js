import React from 'react'
import { connect } from 'react-redux';
import Hobby from './Hobby'
import AddHobby from './AddHobby'
import { deleteUserHobby } from '../../actions/hobby'

function Hobbies (props){
  const { userProfile } = props
  const { deleteUserHobby } = props
  //delete Hobby
  const deleteHobby = (id) => {
    deleteUserHobby({userId: userProfile.id, id: id})
  }
  
  return (
    <div>
      <h1>Hobbies</h1>

      {userProfile.hobbies !== undefined && userProfile.hobbies.map((hobby) => (
        <React.Fragment key={hobby.id}>
          <Hobby hobby={hobby} deleteHobby={deleteHobby}/>
        </React.Fragment>
      ))}
      <AddHobby/>
    </div>
  )
}

export default connect(state => {
  return {
    hobbies: state.hobbiesState.hobbies,    
    userProfile: state.usersState.userProfile
  }
}, { deleteUserHobby })(Hobbies);
