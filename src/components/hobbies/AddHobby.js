import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getHobbies } from '../../actions/hobby'
import { addToUserHobbies } from '../../actions/hobby'

const AddHobby = (props) => {
  let userHobbies = []
  if(props.userProfile.hobbies !== undefined){
    userHobbies = props.userProfile.hobbies
  }  
  const { userProfile } = props;
  const {hobbiesList} = props;
  const {getHobbies} = props;
  const { addToUserHobbies } = props;
  
  //[X] I want to display hobbies list minus any the user has already associated to them
  //[X] I want to add a selected hobby to the user
  //[X] when the server responds to the add request, I'll receive an array that includes hobbies added to the user along with another array that contains hobby added to the hobbies database
  //[X] the action to add a users hobby will necessarily update the redux store for hobbies associated with the user and update the local list of all hobbies available on in the database

  //create our search list, check if user as hobby already associated, if not, make an option
  const searchList = hobbiesList.filter( hobby => {
    const result = userHobbies.find(f => f.name === hobby.name)
    return result === undefined || !result}).map( hobby => {
        return {
          value: hobby.id,
          label: hobby.name
        }
      })
  
  const onChange = (e) => {
    const infoPacket = {
      userId: userProfile.id,
      hobbies: [{name: e.label}]
    }
    addToUserHobbies(infoPacket);
  }

  const { hobbiesLoaded } = props
  useEffect(() => {
    hobbiesLoaded === false && getHobbies();
  })
  
  return (
    <div>
      <h4>AddHobby</h4>
      <CreatableSelect 
        isClearable
        options={searchList}
        onChange={(e) => onChange(e)}
        value = {""}
      />
    </div>
  )
}

export default connect(state => {
  return {
    hobbiesLoaded: state.hobbiesState.hobbiesLoaded,
    hobbiesList: state.hobbiesState.hobbies,    
    userProfile: state.usersState.userProfile
  }
}, { getHobbies, addToUserHobbies })(AddHobby);
