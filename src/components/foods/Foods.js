import React from 'react'
import { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Food from './Food'
import AddFood from './AddFood'
const backendUrl = 'http://localhost:3001/'

function Foods ({ currentUser }){
  const [foodsList, setFoodsList] = useState([])
  const [userFoods, setUserFoods] = useState([])

  //delete Food
  const deleteFood = (id) => {
    const res = userFoods.filter(element => element.id !== parseInt(id))
    console.log(id, "deleteFood", res, "userFoods:", userFoods)
    setUserFoods(res)
    //Call dispatch for redux here
  }

  //add Food - will be passed to the Add Food component and called from AddFood component
  const addFood = async (foodName) => {   
    const newFood = await updateFoodsList(foodsList, foodName)
    updateUserFoods(newFood);
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
      setFoodsList([...foodsList, newFood.food]);  
      return newFood.food
  } 

  const foodExists = (data, find) => {
    return data.find(element => element.name === find)
  }

  //Get Foods List from Server
  useEffect(() => {   
    getFoods()
  }, [])

  const getFoods = async () => {
    const foodsFromServer = await fetchFoods()
    setFoodsList(foodsFromServer)
  }

  const fetchFoods = async () => {
    const res = await fetch(`${backendUrl}/foods`)
    const data = await res.json()
    return data.foods;
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
      <AddFood foodsList={foodsList} addFood={addFood}/>
    </div>
  )
}

export default connect(state => {
  return {
    currentUser: state.auth.currentUser
  }
})(Foods);
