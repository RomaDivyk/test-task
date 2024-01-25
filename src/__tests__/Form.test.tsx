import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
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

  const mainRender = () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  };

  it('should contain heading element', () => {
    mainRender();
    const headingElement = screen.getByRole('heading', { name: 'REGISTRATION' });
    expect(headingElement).toBeInTheDocument();
  });
  it('should render First Name input', () => {
    mainRender();
    const firstNameInputElement = screen.getByRole('textbox', { name: /first name/i });
    expect(firstNameInputElement).toBeInTheDocument();
  });
  it('should render Last Name input', () => {
    mainRender();
    const lastNameInputElement = screen.getByRole('textbox', { name: /last name/i });
    expect(lastNameInputElement).toBeInTheDocument();
  });
  it('should render Email Addres input', () => {
    mainRender();
    const emailAddresInputElement = screen.getByRole('textbox', { name: /email addres/i });
    expect(emailAddresInputElement).toBeInTheDocument();
  });
  it('should render Password input', () => {
    mainRender();
    const passwordInputElement = screen.getByLabelText('Password');
    expect(passwordInputElement).toBeInTheDocument();
  });
  it('should render Repeat password input', () => {
    mainRender();
    const repeatPasswordInputElement = screen.getByLabelText('Repeat password');
    expect(repeatPasswordInputElement).toBeInTheDocument();
  });
  it('should render button and click on it', () => {
    mainRender();
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    userEvent.click(buttonElement);
    expect(buttonElement).toBeDefined();
  });
});
