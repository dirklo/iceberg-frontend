import { render } from '@testing-library/react';
import React from 'react';

import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Food from './Food'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const food = {id: 1, name: "test"}

describe('Food', () => {
  it('renders Food', () => {
    const {getByText, getByTestId, container} = render(<Food food={food}/>)
    const elem = getByTestId('item')
    expect(elem.innerHTML).toBe('test')
  })
})

// it("renders", () => {
//   act(() => {
    
//   })
//   expect(container.textContent).to.equal("test")
// })