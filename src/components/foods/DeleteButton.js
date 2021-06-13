import React from 'react'

export default function DeleteButton({ id, deleteFood }) {
  return (
    <div>
      <button id={id} onClick={deleteFood}>Delete</button>
    </div>
  )
}
