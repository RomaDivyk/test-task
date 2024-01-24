import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux';

import { MediaCart } from '../components';

describe('testing App component', () => {
  it('renders correctly MediaCart component', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MediaCart data={[]} />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
