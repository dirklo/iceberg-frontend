import React from 'react'
import { useState } from 'react';
import Hobby from './Hobby'
import AddHobby from './AddHobby'


const Hobbies = () => {
  const [hobbiesList, setHobbiesList] = useState([
      {
        id: 1,
        name: "swimming"
      },
      {
        id: 2,
        name: "cycling"
      },
      {
        id: 3,
        name: "running",
      }
    ]
  )

  const [userHobbies, setUserHobbies] = useState([
    {
      id: 1,
      name: "swimming"
    }
  ])

  const addHobby = (data) => { 
    const id = Math.floor(Math.random() * 10000) + 1
    const newHobby = {id, name: data}
    hobbyExists(userHobbies, data) === undefined && setUserHobbies([...userHobbies, newHobby]);
    hobbyExists(hobbiesList, data) === undefined && setHobbiesList([...hobbiesList, newHobby]);  
  };

  const hobbyExists = (data, find) => {
    return data.find(element => element.name === find)
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
