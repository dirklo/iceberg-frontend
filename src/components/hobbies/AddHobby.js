import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getHobbies } from '../../actions/hobby';

const AddHobby = (props) => {
  const {hobbies} = props;
  const {addHobby} = props;
  const {getHobbies} = props;

  const searchList = hobbies.map( (food) => { 
    return {
      value: food.id,
      label: food.name
    }
  } )
   
  const onChange = (e) => {
    addHobby(e.label);
  }

  const { hobbiesLoaded } = props
  useEffect(() => {
    hobbiesLoaded === false && getHobbies();
  })

  return (
    <div>
      <h4>AddHobby</h4>
      <CreatableSelect 
        options={searchList}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default connect(state => {
  return {
    hobbiesLoaded: state.hobbiesState.hobbiesLoaded,
    hobbies: state.hobbiesState.hobbies
  }
}, { getHobbies })(AddHobby);
