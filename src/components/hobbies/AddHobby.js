import React from 'react'
import { useState } from 'react'
import CreatableSelect from 'react-select/creatable';

export default function AddHobby({ hobbiesList, addHobby }) {
  const [selectedOption, setSelectedOption] = useState('');
  const searchList = hobbiesList.map(
    (hobby) => {
      return {
        value: hobby.id,
        label: hobby.name
      }
    }
  )
  
  const test = (e) => {
    addHobby(e.label);
  }
  console.log("AddHobby:", "hobbiesList:", hobbiesList);
  return (
    <div>
      <h4>AddHobby</h4>
      <CreatableSelect 
        options={searchList}
        onChange={(e) => test(e)}
      />
    </div>
  )
}
