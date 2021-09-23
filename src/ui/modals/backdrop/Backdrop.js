import classes from './Backdrop.module.css';

const Backdrop = (props) => (
  <div onClick={props.onClose} className={classes.backdrop}>
  </div>
);

export default Backdrop;