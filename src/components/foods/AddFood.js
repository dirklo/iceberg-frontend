import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getFoods } from '../../actions/food'

const AddFood = (props) => {
  const {foods} = props;
   const {addFood} = props;
  const {getFoods} = props;
  const searchList = foods.map(
    (food) => {
      return {
        value: food.id,
        label: food.name
      }
    }
  )
  
  const onChange = (e) => {
    addFood(e.label);
  }
  console.log("addFood props:", props)
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
