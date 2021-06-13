import React from 'react';
import Foods from '../foods/Foods'

function UserProfile(){
  return (
    <div>
      <h1>UserProfile</h1>
      {/* added in search-add-component branch */}
      <Foods/>
    </div>
  )
}
export default UserProfile;