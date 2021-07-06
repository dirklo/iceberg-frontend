import { 
  cleanup, 
  fireEvent, 
  render 
} from "@testing-library/react";
import React from 'react';
import DeleteButton from './DeleteButton'

describe('DeleteButton', () => {  
  it('deletes on click', done => {
    function onDelete() {
      done();
    }
    const {getByText, getByTestId} = render(<DeleteButton id={1} deleteFood={onDelete}/>)
    const btn = getByText('Delete')
    expect(btn.id).toBe('1')
    fireEvent.click(btn)
  })
})

afterEach(cleanup);