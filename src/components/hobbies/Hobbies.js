import React from 'react'
import { useState, useEffect } from 'react';
import Hobby from './Hobby'
import AddHobby from './AddHobby'
const backendUrl = 'http://localhost:3001/'


const Hobbies = () => {
  const [hobbiesList, setHobbiesList] = useState([])

  const [userHobbies, setUserHobbies] = useState([
    {
      id: 1,
      name: "swimming"
    }
  ])

  const addHobby = async (hobbyName) => {   
   
    //updateUserHobbyList(userHobbies, newHobby)
    updateHobbiesList(hobbiesList, hobbyName)
  };

  // const updateUserHobbyList = (userHobbies, hobbyName) => {
  //   if(hobbyExists(userHobbies, hobbyName) === undefined){
      
  //     setUserHobbies([...userHobbies, newHobby]);
  //   }
  // }

  const updateHobbiesList = async (hobbiesList, hobbyName) => {
    if(hobbyExists(hobbiesList, hobbyName) === undefined){
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
  

  //Add Hobby  
  console.log("userHobbies:", userHobbies, "hobbiesList:", hobbiesList)
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
export default Hobbies;
