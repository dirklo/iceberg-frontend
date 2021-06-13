import React from 'react'
import CreatableSelect from 'react-select/creatable';

export default function AddFood({ foodsList, addFood }) {
  const searchList = foodsList.map(
    (food) => {
      return {
        value: food.id,
        label: food.name
      }
    }
  )
  
  const onChange = (e) => {
    addFood(e.label);
  }
  return (
    <div>
      <h4>AddFood</h4>
      <CreatableSelect 
        options={searchList}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}
