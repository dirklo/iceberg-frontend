import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import Hobby from './Hobby'
import AddHobby from './AddHobby'
import { addToHobbies } from '../../actions/hobby'
const backendUrl = 'http://localhost:3001/'

function Hobbies (props){
  const [userHobbies, setUserHobbies] = useState([])

  //delete Hobby
  const deleteHobby = (id) => {
    const res = userHobbies.filter(element => element.id !== parseInt(id))
    console.log(id, "deleteHobby", res, "userHobbies:", userHobbies)
    setUserHobbies(res)
    //Call dispatch for redux here
  }

  //add Hobby - will be passed to the Add Hobby component and called from AddHobby component
  const { hobbies } = props;
  const addHobby = async (hobbyName) => {         
    let newHobby
    if(hobbyExists(hobbies, hobbyName) === undefined){
      newHobby = await createHobby(hobbyName);
      const { addToHobbies } = props;
      addToHobbies(newHobby);
    } else {
      newHobby = hobbies.find(hobby => hobby.name === hobbyName);
    }
    
    console.log("hobbyName", hobbyName, newHobby)
    if(hobbyExists(userHobbies, newHobby.name) === undefined){
      updateUserHobbies(newHobby);
    }
    
  };

  // const updateHobbiesList = (hobbiesList, hobbyName) => {
  //   const fetchedHobby = hobbyExists(hobbiesList, hobbyName);
  //   if(fetchedHobby === undefined){
  //     return createHobby(hobbyName);
  //   } else {
  //     return fetchedHobby;
  //   }
  // }

  const updateUserHobbies = (newHobby) => {
    setUserHobbies([...userHobbies, newHobby])
  }

  //Create a new hobby in the db - Called from updateHobbiesList
  const createHobby = async (hobbyName) => {
    const data = {name: hobbyName};
      const res = await fetch(`${backendUrl}/hobbies`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const  newHobby = await res.json()
      console.log("newHobby after add to server:", newHobby)
      return newHobby.hobby
  } 

  const hobbyExists = (data, find) => {
    return data.find(element => element.name === find)
  }
  
  console.log("userHobbies:", userHobbies)
  return (
    <div>
      <h1>Hobbies</h1>

      {userHobbies.length > 0 && userHobbies.map((hobby) => (
        <React.Fragment key={hobby.id}>
          <Hobby hobby={hobby} deleteHobby={deleteHobby}/>
        </React.Fragment>
      ))}
      <AddHobby hobbiesList={hobbies} addHobby={addHobby} userHobbies={userHobbies}/>
    </div>
  )
}

export default connect(state => {
  return {
    currentUser: state.auth.currentUser,
    hobbies: state.hobbiesState.hobbies
  }
}, { addToHobbies })(Hobbies);
