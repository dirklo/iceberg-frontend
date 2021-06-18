import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getFoods } from '../../actions/food'

const AddFood = (props) => {
  const {foods} = props;
  const {addFood} = props;
  const {getFoods} = props;
  const { userFoods } = props;

  const foodExists = (data, find) => {
    return data.find(element => element.name === find)
  }

  const searchList = foods.map(
    (food) => { 
      if(foodExists(userFoods, food.name) === undefined){
        return( {
          value: food.id,
          label: food.name
        })
      }      
    }
  )
  
  const onChange = (e) => {
    addFood(e.label);
  }
  console.log("addFood props:", props)
  console.log("searchList:", searchList)
  const { foodsLoaded } = props
  useEffect(() => {
    foodsLoaded === false && getFoods();
  })
  console.log("AddFoods", foods)
  return (
    <div>
      <h4>AddFood</h4>
      <CreatableSelect 
        options={searchList}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default connect(state => {
  return {
    foodsLoaded: state.foodsState.foodsLoaded,
    foods: state.foodsState.foods
  }
}, { getFoods })(AddFood);
