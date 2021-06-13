import React from 'react'
import { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Hobby from './Hobby'
import AddHobby from './AddHobby'
const backendUrl = 'http://localhost:3001/'

function Hobbies ({ currentUser }){
  const [hobbiesList, setHobbiesList] = useState([])
  const [userHobbies, setUserHobbies] = useState([])

  const addHobby = async (hobbyName) => {   
    const newHobby = await updateHobbiesList(hobbiesList, hobbyName)
    console.log("addHoby:", newHobby)
    updateUserHobbies(newHobby);
  };

  const updateUserHobbies = (newHobby) => {
    console.log("updateUserHobbies:", newHobby);
    setUserHobbies([...userHobbies, newHobby])
    console.log("updateUserHobbies after:", userHobbies, newHobby)
  }

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
      setHobbiesList([...hobbiesList, newHobby]);  
      getHobbies()
      return newHobby.hobby
  } 

  const updateHobbiesList = (hobbiesList, hobbyName) => {
    const fetchedHobby = hobbyExists(hobbiesList, hobbyName);
    if(fetchedHobby === undefined){
      return createHobby(hobbyName);
    } else {
      return fetchedHobby;
    }
  }

  const hobbyExists = (data, find) => {
    return data.find(element => element.name === find)
  }

  useEffect(() => {   
    getHobbies()
  }, [])

  const getHobbies = async () => {
    const hobbiesFromServer = await fetchHobbies()
    setHobbiesList(hobbiesFromServer)
  }

  //Fetch Hobbies
  const fetchHobbies = async () => {
    const res = await fetch(`${backendUrl}/hobbies`)
    const data = await res.json()
    return data.hobbies;
  }
  console.log("userHobbies before return:", userHobbies)
  console.log("currentUser before:", currentUser)
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
