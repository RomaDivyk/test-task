import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux';

import { ModalWindow } from '../components';

describe('testing App component', () => {
  it('renders correctly ModalWindow component', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ModalWindow
            id={''}
            data={[]}
            open={false}
            onClose={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
