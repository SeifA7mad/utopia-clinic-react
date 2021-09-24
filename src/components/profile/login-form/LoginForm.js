import { useRef, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../store/auth-context';
import Input from '../../../ui/form-content/input/Input';
import Button from '../../../ui/form-content/button/Button';
import ErrorMessage from '../../../ui/form-content/error-message/ErrorMessage';
import classes from './LoginForm.module.css';

const validateEmpty = (value) => {
  return value.trim() !== '';
};

export const dummyUserData = {
  1: { userName: 'Seif ahmad', email: 'seif@', pass: '1234' },
  2: { userName: 'Nasser', email: 'nasser@', pass: '1234' },
};

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

    // const userData = dummyUserData.find(user => user.email === emailValue && user.pass === passValue);
    let userId = null;
    for (const [key, value] of Object.entries(dummyUserData)) {
      if (value.email === emailValue && value.pass === passValue) {
        userId = key;
      }
    }
    
    if (!userId) {
      setError('enter a vlid email or password');
      return;
    }

    authCtx.login(userId);
    setError('');
  };

  return (
    <>
      {!!error && <ErrorMessage errorText={error} />}
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
        Sign-up
      </Link>
    </>
  );
};

export default LoginForm;
