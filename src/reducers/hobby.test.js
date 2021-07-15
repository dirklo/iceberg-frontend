import reducer, { initialState, fetchHobbies, addHobbies } from './hobby'

test('should return initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    hobbies: [],
    hobbiesLoaded: false
  })
})

test('should add hobbies', () => {
  const previousState = initialState;
  const hobbies = [
    {id: 1, name: "test"}
  ]
  
  expect(reducer(previousState, fetchHobbies(hobbies))).toEqual(
    {hobbiesLoaded: true, hobbies: hobbies}
  )
})

test('should add hobby', () => {
  const previousState = {
    hobbies: [{id: 1, name: "test"}],
    hobbiesLoaded: true
  };
  const hobbies = [{id: 2, name: "test1"}]
  expect(reducer(previousState, addHobbies(hobbies))).toEqual(
    {...previousState, hobbies: [...previousState.hobbies, ...hobbies]}
  )
})