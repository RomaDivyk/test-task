import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux';

import { Form } from '../components';

describe('testing Form component', () => {
  it('should match a snapshot in Form component', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  const renderComponent = () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  };

  it('should contain heading element', () => {
    renderComponent();
    const headingElement = screen.getByRole('heading', { name: 'REGISTRATION' });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render First Name input and type `Hello`', async () => {
    renderComponent();
    const firstNameInputElement = screen.getByRole('textbox', { name: /first name/i });
    expect(firstNameInputElement).toBeInTheDocument();
    userEvent.clear(firstNameInputElement);
    fireEvent.change(firstNameInputElement, { target: { value: 'Hello' } });
    await waitFor(() => {
      expect(firstNameInputElement).toHaveValue('Hello');
    });
  });

  it('should render Last Name input and type `World`', async () => {
    renderComponent();
    const lastNameInputElement = screen.getByRole('textbox', { name: /last name/i });
    expect(lastNameInputElement).toBeInTheDocument();
    userEvent.clear(lastNameInputElement);
    fireEvent.change(lastNameInputElement, { target: { value: 'World' } });
    await waitFor(() => {
      expect(lastNameInputElement).toHaveValue('World');
    });
  });

  it('should render Email Addres input and type `@gmail.com`', async () => {
    renderComponent();
    const emailAddresInputElement = screen.getByRole('textbox', { name: /email addres/i });
    expect(emailAddresInputElement).toBeInTheDocument();
    userEvent.clear(emailAddresInputElement);
    fireEvent.change(emailAddresInputElement, { target: { value: '@gmail.com' } });
    await waitFor(() => {
      expect(emailAddresInputElement).toHaveValue('@gmail.com');
    });
  });

  it('should render Password input and type `12345qwerty`', async () => {
    renderComponent();
    const passwordInputElement = screen.getByLabelText('Password');
    expect(passwordInputElement).toBeInTheDocument();
    userEvent.clear(passwordInputElement);
    fireEvent.change(passwordInputElement, { target: { value: '12345qwerty' } });
    await waitFor(() => {
      expect(passwordInputElement).toHaveValue('12345qwerty');
    });
  });

  it('should render Repeat password input and type `12345qwerty`', async () => {
    renderComponent();
    const repeatPasswordInputElement = screen.getByLabelText('Repeat password');
    expect(repeatPasswordInputElement).toBeInTheDocument();
    userEvent.clear(repeatPasswordInputElement);
    fireEvent.change(repeatPasswordInputElement, { target: { value: '12345qwerty' } });
    await waitFor(() => {
      expect(repeatPasswordInputElement).toHaveValue('12345qwerty');
    });
  });

  it('should render button and click on it', async () => {
    const counter = {
      click: 0,
    };
    renderComponent();
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    userEvent.click(buttonElement).then(() => (counter.click = 1));
    await waitFor(() => {
      expect(counter.click).toEqual(1);
    });
  });
});
