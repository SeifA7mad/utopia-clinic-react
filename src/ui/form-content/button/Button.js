import classes from './Button.module.css';

const btnType = {
  submit: {
    class: classes.submitBtn,
    type: 'submit',
  },
  exit: {
    class: classes.exitBtn,
    type: 'button',
  },
};

const Button = ({ type, children, disabled }) => (
  <button type={btnType[type].type} className={btnType[type].class} disabled={disabled}>
    {children}
  </button>
);

export default Button;
