import React from 'react'
import DeleteButton from './DeleteButton'

const Food = ({ food, deleteFood }) => {
  const onDelete = (e) => {
    deleteFood(e.target.id)
  }
  return (
    <div>
      <h3 data-testid="item">
        {food.name} 
      </h3><DeleteButton id={food.id} deleteFood={onDelete}/>
    </div>
  )
}
export default Food;
