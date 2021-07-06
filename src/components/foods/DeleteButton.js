import React from 'react'

export default function DeleteButton({ id, deleteFood }) {
  return (
    <div>
      <button data-testid={id} id={id} onClick={deleteFood}>Delete</button>
    </div>
  )
}
