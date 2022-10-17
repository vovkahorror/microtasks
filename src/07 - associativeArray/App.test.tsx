import React from 'react';
import { render } from '@testing-library/react';
import AppTodoList from './AppTodoList';

test('renders learn react link', () => {
  const { getByText } = render(<AppTodoList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
