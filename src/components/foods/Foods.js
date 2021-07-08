import React from 'react'
import { connect } from 'react-redux';
import Food from './Food'
import AddFood from './AddFood'
import { deleteUserFood } from '../../actions/food'

function Foods (props){
  const { userProfile } = props
  const { deleteUserFood } = props
  //delete Food
  const deleteFood = (id) => {
    console.log("props", props)
    console.log("userProps after before", userProfile)
    deleteUserFood({userId: userProfile.id, id: id})
    console.log("userProps after delete", userProfile)
  }
  
  console.log("Foods Props", props)
  return (
    <div>
      <h1>Foods</h1>

      {userProfile.foods !== undefined && userProfile.foods.map((food) => (
        <React.Fragment key={food.id}>
          <Food food={food} deleteFood={deleteFood}/>
        </React.Fragment>
      ))}
      <AddFood/>
    </div>
  )
}

export default connect(state => {
  return {
    foods: state.foodsState.foods,    
    userProfile: state.usersState.userProfile
  }
}, { deleteUserFood })(Foods);
