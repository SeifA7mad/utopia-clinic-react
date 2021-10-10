import classes from './Card.module.css';
const Card = ({ children, onClick = null, className }) => (
  <div
    onClick={onClick}
    className={`${classes.card} ${className ? className : ''} ${
      onClick ? classes.cardClick : ''
    }`}
  >
    {children}
  </div>
);

export default Card;
