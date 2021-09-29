import { forwardRef } from 'react';
import ErrorMessage from '../error-message/ErrorMessage';
import classes from './Input.module.css';

const Input = forwardRef(({ type, name, placeholder, error, onChange, onBlur, value }, ref) => {
  return (
    <>
      {error && <ErrorMessage errorText={error} />}
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder ? placeholder : null}
        name={name}
        ref={ref ? ref : null}
        onChange={onChange ? onChange : null}
        onBlur={onBlur ? onBlur : null}
        value={value}
      />
    </>
  );
});

export default Input;
