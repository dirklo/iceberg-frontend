import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getHobbies } from '../../actions/hobby'
import { addToUserHobbies, deleteUserHobby } from '../../actions/hobby'
import { makeAvailableList, changePacket } from '../../helpers/listHelpers'

const AddHobby = (props) => {
  // let userHobbies = []
  // if(props.userProfile.hobbies !== undefined){
  //   userHobbies = props.userProfile.hobbies
  // }  
  const { userId, userHobbies, hobbiesList, getHobbies, addToUserHobbies, deleteUserHobby } = props;
  
  //[X] I want to display hobbies list minus any the user has already associated to them
  //[X] I want to add a selected hobby to the user
  //[X] when the server responds to the add request, I'll receive an array that includes hobbies added to the user along with another array that contains hobby added to the hobbies database
  //[X] the action to add a users hobby will necessarily update the redux store for hobbies associated with the user and update the local list of all hobbies available on in the database
  
  const onChange = (newList) => {
    const packet = changePacket(userId, newList, userHobbies)
    if(packet.willCreate){
      addToUserHobbies(packet.createPacket)
    } else if(packet.willDelete){
      deleteUserHobby(packet.deletePacket)
    }
  }

  const { hobbiesLoaded } = props
  useEffect(() => {
    hobbiesLoaded === false && getHobbies();
  })
  return (
    <div>
      <h4>AddHobby</h4>
      <CreatableSelect 
        isMulti
        options={makeAvailableList(hobbiesList, userHobbies)}
        onChange={onChange}
        value={makeAvailableList(userHobbies, [])}
      />
    </div>
  )
}

export default connect(state => {
  return {
    hobbiesLoaded: state.hobbiesState.hobbiesLoaded,
    hobbiesList: state.hobbiesState.hobbies,    
    userId: state.usersState.userProfile.id,
    userHobbies: state.usersState.userProfile.hobbies
  }
}, { getHobbies, addToUserHobbies, deleteUserHobby })(AddHobby);
