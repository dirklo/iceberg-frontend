import React from 'react'
import DeleteButton from './DeleteButton'

const Hobby = ({ hobby, deleteHobby }) => {
  const onDelete = (e) => {
    deleteHobby(e.target.id)
  }
  return (
    <div>
      <h3>
        {hobby.name} <DeleteButton id={hobby.id} deleteHobby={onDelete}/>
      </h3>
    </div>
  )
}
export default Hobby;
