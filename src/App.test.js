import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('CatPic', () => {
  const {getByText} = render(<App />);
  expect(getByText('Just a random cat pic (=•́ܫ•̀=)')).not.toBeNull();
});
