import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import Food from './Food'
import AddFood from './AddFood'

function Foods (props){
  const [userFoods, setUserFoods] = useState([])

  //delete Food
  const deleteFood = (id) => {
    const res = userFoods.filter(element => element.id !== parseInt(id))
    console.log(id, "deleteFood", res, "userFoods:", userFoods)
    setUserFoods(res)
    //Call dispatch for redux here
  }

  const { userProfile } = props;
  
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
})(Foods);
