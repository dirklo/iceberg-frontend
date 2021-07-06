import { 
  cleanup, 
  render 
} from "@testing-library/react";
import React from 'react';
import Food from './Food'

describe('Food', () => {
  it('renders Food', () => {
    const food = {id: 1, name: "test"}
    const {getByTestId, container} = render(<Food food={food}/>)
    const elem = getByTestId('item')
    expect(elem.innerHTML).toBe('test')
  })
})

afterEach(cleanup);