import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux';

import App from '../App';
import { render, screen } from '@testing-library/react';

describe('testing App component', () => {
  it('should match a snapshot in App component', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render App component with id', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const element = screen.getByTestId('appId');
    expect(element).toBeInTheDocument();
  });
});
