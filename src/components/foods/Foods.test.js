import { 
  cleanup, 
  render 
} from "@testing-library/react";
import React from 'react';
import Foods from './Foods'

describe('Foods', () => {
  it('renders Foods', () => {
    const {getByTestId} = render(<Foods />)
  })
})