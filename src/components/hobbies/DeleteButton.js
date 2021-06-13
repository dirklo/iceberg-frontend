import React from 'react'

export default function DeleteButton({ id, deleteHobby }) {
  return (
    <div>
      <button id={id} onClick={deleteHobby}>Delete</button>
    </div>
  )
}
