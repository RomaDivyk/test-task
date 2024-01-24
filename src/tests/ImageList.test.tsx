import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux';

import { ImageList } from '../components';

describe('testing App component', () => {
  it('renders correctly ImageList component', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ImageList />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
