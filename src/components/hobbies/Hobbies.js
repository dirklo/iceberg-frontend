import React from 'react'
import { useState } from 'react';
import Hobby from './Hobby'


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

  return (
    <div>
      <h1>Hobbies</h1>
      {userHobbies.map((hobby) => (
        <Hobby hobby={hobby}/>
      ))}
    </div>
  )
}
export default Hobbies;
