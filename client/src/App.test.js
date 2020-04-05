import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux';

test('renders Avengers title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = getByText(/Avengers/i);
  expect(linkElement).toBeInTheDocument();
});
