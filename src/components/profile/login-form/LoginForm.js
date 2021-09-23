import { useRef } from 'react';
import Input from '../../../ui/form-content/input/Input';
import Button from '../../../ui/form-content/button/Button';
import classes from './LoginForm.module.css';

const LoginForm = () => {
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.loginForm} onSubmit={submitFormHandler}>
      <Input type='text' placeholder='Email' ref={emailInputRef} name='Email' />
      <Input type='password' placeholder='Password' ref={passInputRef} name='Password' />
      <Button type='submit'> Login </Button>
    </form>
  );
};

export default LoginForm;
