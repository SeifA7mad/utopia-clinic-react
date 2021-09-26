import classes from './Card.module.css';
const Card = ({ children, onClick = null }) => (
  <div
    onClick={onClick}
    className={`${classes.card} ${onClick ? classes.cardClick : ''}`}
  >
    {children}
  </div>
);

export default Card;
