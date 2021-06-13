import React from 'react'
import DeleteButton from './DeleteButton'
import { FaTimes } from 'react-icons/fa'

const Hobby = ({ hobby }) => {
  return (
    <div>
      <h3>
        {hobby.name} <DeleteButton/> <FaTimes style={{color: 'red', cursor: 'pointer'}}/>
      </h3>
    </div>
  )
}
export default Hobby;
