import { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(({type, name, placeholder, error}, ref) => {
  return (
    <>
      {error && <p className={classes.error}> {error} </p>}
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder ? placeholder : null}
        name={name}
        ref={ref ? ref : null}
      />
    </>
  );
});

export default Input;
