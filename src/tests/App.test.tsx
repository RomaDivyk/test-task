import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux';

import App from '../App';

/* test('text in App component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    { wrapper: BrowserRouter }
  );
  const headingElement = screen.getByRole('heading', { name: 'Test task' });
  expect(headingElement).toBeInTheDocument();
}); */

describe('testing App component', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
