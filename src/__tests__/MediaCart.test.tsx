import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../redux';

import { MediaCart } from '../components';

describe('testing MediaCart component', () => {
  it('should match a snapshot in MediaCart component', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MediaCart data={[]} />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render MediaCart component with id', () => {
    render(
      <Provider store={store}>
        <MediaCart data={[]} />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const element = screen.getByTestId('mediaCartId');
    expect(element).toBeInTheDocument();
  });
});
