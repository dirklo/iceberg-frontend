import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getFoods } from '../../actions/food'
import { addToUserFoods } from '../../actions/food'

const AddFood = (props) => {
  let userFoods = []
  if(props.userProfile.foods !== undefined){
    userFoods = props.userProfile.foods
  }  
  const { userProfile } = props;
  const {foodsList} = props;
  const {getFoods} = props;
  const { addToUserFoods } = props;
  
  //[X] I want to display foods list minus any the user has already associated to them
  //[X] I want to add a selected food to the user
  //[X] when the server responds to the add request, I'll receive an array that includes foods added to the user along with another array that contains food added to the foods database
  //[X] the action to add a users food will necessarily update the redux store for foods associated with the user and update the local list of all foods available on in the database

  //create our search list, check if user as food already associated, if not, make an option
  const searchList = foodsList.filter( food => {
    const result = userFoods.find(f => f.name === food.name)
    return result === undefined || !result}).map( food => {
        return {
          value: food.id,
          label: food.name
        }
      })
  
  const onChange = (e) => {
    const infoPacket = {
      userId: userProfile.id,
      foods: [{name: e.label}]
    }
    addToUserFoods(infoPacket);
  }

  const { foodsLoaded } = props
  useEffect(() => {
    foodsLoaded === false && getFoods();
  })
  
  return (
    <div>
      <h4>AddFood</h4>
      <CreatableSelect 
        isClearable
        options={searchList}
        onChange={(e) => onChange(e)}
        value = {""}
      />
    </div>
  )
}

export default connect(state => {
  return {
    foodsLoaded: state.foodsState.foodsLoaded,
    foodsList: state.foodsState.foods,    
    userProfile: state.usersState.userProfile
  }
}, { getFoods, addToUserFoods })(AddFood);
