import React from 'react'
import { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Hobby from './Hobby'
import AddHobby from './AddHobby'
const backendUrl = 'http://localhost:3001/'

function Hobbies ({ currentUser }){
  const [hobbiesList, setHobbiesList] = useState([])
  const [userHobbies, setUserHobbies] = useState([])

  //add Hobby - will be passed to the Add Hobby component and called from AddHobby component
  const addHobby = async (hobbyName) => {   
    const newHobby = await updateHobbiesList(hobbiesList, hobbyName)
    updateUserHobbies(newHobby);
  };

  const updateHobbiesList = (hobbiesList, hobbyName) => {
    const fetchedHobby = hobbyExists(hobbiesList, hobbyName);
    if(fetchedHobby === undefined){
      return createHobby(hobbyName);
    } else {
      return fetchedHobby;
    }
  }

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
      setHobbiesList([...hobbiesList, newHobby.hobby]);  
      //getHobbies()
      return newHobby.hobby
  } 

  const hobbyExists = (data, find) => {
    return data.find(element => element.name === find)
  }

  //Get Hobbies List from Server
  useEffect(() => {   
    getHobbies()
  }, [])

  const getHobbies = async () => {
    const hobbiesFromServer = await fetchHobbies()
    setHobbiesList(hobbiesFromServer)
  }

  const fetchHobbies = async () => {
    const res = await fetch(`${backendUrl}/hobbies`)
    const data = await res.json()
    return data.hobbies;
  }

  return (
    <div>
      <h1>Hobbies</h1>

      {userHobbies.map((hobby) => (
        <React.Fragment key={hobby.id}>
          <Hobby hobby={hobby}/>
        </React.Fragment>
      ))}
      <AddHobby hobbiesList={hobbiesList} addHobby={addHobby}/>
    </div>
  )
}

export default connect(state => {
  return {
    currentUser: state.auth.currentUser
  }
})(Hobbies);
