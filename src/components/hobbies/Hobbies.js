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
    const newHobby = updateHobbiesList(hobbiesList, hobbyName)
    console.log("addHoby:", newHobby)
    updateUserHobbies(userHobbies, newHobby);
  };

  const updateUserHobbies = (userHobbies, hobby) => {
    console.log("updateUserHobbies:", userHobbies)
    setUserHobbies(...userHobbies, hobby)
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
      return newHobby
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
    const getHobbies = async () => {
      const hobbiesFromServer = await fetchHobbies()
      setHobbiesList(hobbiesFromServer)
    }
    getHobbies()
  }, [])

  //Fetch Hobbies
  const fetchHobbies = async () => {
    const res = await fetch(`${backendUrl}/hobbies`)
    const data = await res.json()
    return data.hobbies;
  }
  console.log("userHobbies before return:", userHobbies)
  return (
    <div>
      <h1>Hobbies</h1>

      {currentUser.hobbies.map((hobby) => (
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
