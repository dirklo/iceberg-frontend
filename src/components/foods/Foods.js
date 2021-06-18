import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import Food from './Food'
import AddFood from './AddFood'
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
  const addFood = async (foodName) => {         
    let newFood
    if(foodExists(foods, foodName) === undefined){
      newFood = await createFood(foodName);
    } else {
      newFood = foods.find(food => food.name === foodName);
    }
    
    console.log("foodName", foodName, newFood)
    if(foodExists(userFoods, newFood.name) === undefined){
      updateUserFoods(newFood);
    }
    
  };

  const updateFoodsList = (foodsList, foodName) => {
    const fetchedFood = foodExists(foodsList, foodName);
    if(fetchedFood === undefined){
      return createFood(foodName);
    } else {
      return fetchedFood;
    }
  }

  const updateUserFoods = (newFood) => {
    setUserFoods([...userFoods, newFood])
  }

  //Create a new food in the db - Called from updateFoodsList
  const createFood = async (foodName) => {
    const data = {name: foodName};
      const res = await fetch(`${backendUrl}/foods`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const  newFood = await res.json()
      console.log("newFood after add to server:", newFood)
      return newFood.food
  } 

  const foodExists = (data, find) => {
    return data.find(element => element.name === find)
  }
  
  console.log("userFoods:", userFoods)
  return (
    <div>
      <h1>Foods</h1>

      {userFoods.length > 0 && userFoods.map((food) => (
        <React.Fragment key={food.id}>
          <Food food={food} deleteFood={deleteFood}/>
        </React.Fragment>
      ))}
      <AddFood foodsList={foods} addFood={addFood} userFoods={userFoods}/>
    </div>
  )
}

export default connect(state => {
  return {
    currentUser: state.auth.currentUser,
    foods: state.foodsState.foods
  }
})(Foods);
