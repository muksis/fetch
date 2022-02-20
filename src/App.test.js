import React from 'react';
import * as ReactDOM from 'react-dom';
import {getQueriesForElement} from '@testing-library/dom';
import App from './App';

test('CatPic', () => {
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);
  const {getByText} = getQueriesForElement(root);

  // after rendering our component
  // use DOM APIs (query selector) to make assertions
  expect(root.querySelector('h1').textContent).toBe('Just a random cat pic (=•́ܫ•̀=)');
  expect(getByText('Just a random cat pic (=•́ܫ•̀=)')).not.toBeNull();
});
