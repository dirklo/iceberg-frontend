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

  //Add Hobby
  const addHobby = (hobby) => {
    console.log("addHobby in Hobbies", hobby)
    const id = Math.floor(Math.random() * 10000) + 1
    const newHobby = {id, hobby}
    setUserHobbies([...userHobbies], newHobby)
    console.log("userHobbies:", userHobbies, "newHobby:", newHobby);
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
export default Hobbies;
