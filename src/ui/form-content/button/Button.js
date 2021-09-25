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
  link: {
    class: classes.linkBtn,
    type: 'button'
  }
};

const Button = ({ type, children, disabled, click }) => (
  <button
    type={btnType[type].type}
    className={`${classes.btn} ${btnType[type].class}`}
    disabled={disabled}
    onClick={click}
  >
    {children}
  </button>
);

export default Button;
