import classes from './OfferItem.module.css';
import Card from '../../ui/card/Card';

const OfferItem = ({ img, desc, price, onClick, id }) => {
  return (
      <Card onClick={onClick} className={classes.offerItemCard}>
        <img src={img} alt={`offer-img-${id}`} />
        <p>{desc}</p>
        <i className={classes.offerPrice}> Price: <span> {price + 100}$ </span> {price}$ </i>
      </Card>
  );
};

export default OfferItem;
