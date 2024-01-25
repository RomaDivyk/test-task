import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../redux';

import { ImageList } from '../components';

describe('testing ImageList component', () => {
  it('should match a snapshot in ImageList component', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ImageList />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render ImageList component with id', () => {
    render(
      <Provider store={store}>
        <ImageList />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const element = screen.getByTestId('imageListId');
    expect(element).toBeInTheDocument();
  });
});
