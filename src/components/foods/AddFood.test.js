import { 
  cleanup, 
  render 
} from "@testing-library/react";
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import AddFood from './AddFood'
import store from '../../store'

describe('will test AddFood', () => {
  let props;
  let container;
  beforeEach(() => {      
    store.dispatch({
      type: "FETCH_USER",
      payload: {
        id: 1
      }
    })
    container = render(<Provider store={store}><AddFood {...props}/></Provider>)
  })

  it('should render with given state', () => {
    console.log("searchList:", container.userProfile);
  })
})

afterEach(cleanup);