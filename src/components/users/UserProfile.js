import React from 'react';
import Hobbies from '../hobbies/Hobbies'

function UserProfile(){
  return (
    <div>
      <h1>UserProfile</h1>
      {/* added in search-add-component branch */}
      <Hobbies/>
    </div>
  )
}
export default UserProfile;