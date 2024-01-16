import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';

import { StyledDiv, StyledForm } from '../../styled/StyledForm';

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^[A-Za-z]\w{7,14}$/.test(values.password)) {
    errors.password = 'Invalid password';
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = 'Required';
  } else if (values.password !== values.repeatPassword) {
    errors.repeatPassword = `Password doesn't match`;
  }
  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h1>AUTH PAGE</h1>
      <h2>REGISTRATION</h2>
      <StyledDiv>
        <StyledForm onSubmit={formik.handleSubmit}>
          <TextField
            margin="normal"
            variant="filled"
            label="First Name"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
          <TextField
            margin="normal"
            variant="filled"
            label="Last Name"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          <TextField
            margin="normal"
            variant="filled"
            label="Email Address"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <TextField
            margin="normal"
            variant="filled"
            label="Password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <TextField
            margin="normal"
            variant="filled"
            label="Repeat password"
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
          />
          {formik.errors.repeatPassword ? <div>{formik.errors.repeatPassword}</div> : null}

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </StyledForm>
      </StyledDiv>
    </>
  );
};

export default Form;
