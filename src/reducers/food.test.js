import reducer, { initialState, fetchFoods, addFoods } from './food'

test('should return initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    foods: [],
    foodsLoaded: false
  })
})

test('should add foods', () => {
  const previousState = initialState;
  const foods = [
    {id: 1, name: "test"}
  ]
  
  expect(reducer(previousState, fetchFoods(foods))).toEqual(
    {foodsLoaded: true, foods: foods}
  )
})

test('should add food', () => {
  const previousState = {
    foods: [{id: 1, name: "test"}],
    foodsLoaded: true
  };
  const food = [{id: 2, name: "test1"}]
  expect(reducer(previousState, addFoods(food))).toEqual(
    {...previousState, foods: [...previousState.foods, ...food]}
  )
})