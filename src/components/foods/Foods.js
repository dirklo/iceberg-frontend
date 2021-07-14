import React from 'react'
import { connect } from 'react-redux';
import AddFood from './AddFood'

function Foods (props){
  return (
    <div>
      <h1>Foods</h1>
      <AddFood/>
    </div>
  )
}

export default connect(state => {
  return {
    foods: state.foodsState.foods,    
    userProfile: state.usersState.userProfile
  }
})(Foods);
