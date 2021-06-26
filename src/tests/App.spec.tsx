import React from 'react';
import { render } from 'tests/utils/customRender';
import App from '../App';

test('render hello world in app component', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Hello world/i)).toBeDefined();
});
