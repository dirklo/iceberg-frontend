import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Hobby = ({ hobby }) => {
  return (
    <div>
      <h3>
        {hobby.name} <FaTimes style={{color: 'red', cursor: 'pointer'}}/>
      </h3>
    </div>
  )
}
export default Hobby;
