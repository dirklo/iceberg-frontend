import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import Food from './Food'
import AddFood from './AddFood'
import { addToFoods } from '../../actions/food'
const backendUrl = 'http://localhost:3001/'

function Foods (props){
  const [userFoods, setUserFoods] = useState([])

  //delete Food
  const deleteFood = (id) => {
    const res = userFoods.filter(element => element.id !== parseInt(id))
    console.log(id, "deleteFood", res, "userFoods:", userFoods)
    setUserFoods(res)
    //Call dispatch for redux here
  }

  //add Food - will be passed to the Add Food component and called from AddFood component
  const { foods } = props;
  const { userProfile } = props;
  const addFood = async (foodName) => {         
    console.log("will add food")
    let newFood
    if(foodExists(foods, foodName) === undefined){
      newFood = await createFood(foodName);
      const { addToFoods } = props;
      addToFoods(newFood);
    } else {
      newFood = foods.find(food => food.name === foodName);
      console.log("addFood newFood:", newFood);
    }
    
    console.log("foodName", foodName, newFood)
    if(foodExists(userFoods, newFood.name) === undefined){
      // updateUserFoods(newFood);
    }
    
  };

  const updateUserFoods = (newFood) => {
    setUserFoods([...userFoods, newFood])
  }

  //Create a new food in the db - Called from updateFoodsList
  const createFood = async (foodName) => {
    const data = [{name: foodName}];
      const res = await fetch(`${backendUrl}/users/${userProfile.id}/usersfood`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return await res.json()
  } 

  const foodExists = (data, find) => {
    return data.find(element => element.name === find)
  }
  
  console.log("userProfile.foods:", userProfile.foods)
  console.log("Foods Props", props)
  console.log("userProfile Foods", userProfile.foods)
  return (
    <div>
      <h1>Foods</h1>

      {userProfile.foods !== undefined && userProfile.foods.map((food) => (
        <React.Fragment key={food.id}>
          <Food food={food} deleteFood={deleteFood}/>
        </React.Fragment>
      ))}
      <AddFood userProfile={userProfile} addFood={addFood}/>
    </div>
  )
}

export default connect(state => {
  return {
    foods: state.foodsState.foods,    
    userProfile: state.usersState.userProfile
  }
}, { addToFoods })(Foods);
