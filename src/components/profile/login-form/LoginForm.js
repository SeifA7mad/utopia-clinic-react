import { useRef, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import {AuthContext} from '../../../store/auth-context'
import Input from '../../../ui/form-content/input/Input';
import Button from '../../../ui/form-content/button/Button';
import ErrorMessage from '../../../ui/form-content/error-message/ErrorMessage';
import classes from './LoginForm.module.css';

const validateEmpty = (value) => {
  return value.trim() !== '';
}

const LoginForm = () => {

  const [error, setError] = useState('');

  const emailInputRef = useRef();
  const passInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const emailValue = emailInputRef.current.value;
    const passValue = passInputRef.current.value;

    const inputsEmpty = !validateEmpty(emailValue) || !validateEmpty(passValue);

    if (inputsEmpty) {
      setError('Fill the fields');
      return;
    }

    console.log(passValue.length);

    if (!emailValue.includes('@') || !(passValue.length > 4)) {
      setError('Enter a valid email or password');
      return;
    }



    authCtx.login();
    setError('');
  };

  return (
    <>
      {!!error &&<ErrorMessage errorText={error} />}
      <form className={classes.loginForm} onSubmit={submitFormHandler}>
        <Input
          type='text'
          placeholder='Email'
          ref={emailInputRef}
          name='Email'
        />
        <Input
          type='password'
          placeholder='Password'
          ref={passInputRef}
          name='Password'
        />
        <Button type='submit'> Login </Button>
      </form>
      <Link className={classes.signUp} to=''>
        {' '}
        Sign-up{' '}
      </Link>
    </>
  );
};

export default LoginForm;
