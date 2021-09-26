import classes from './OfferItem.module.css';
import Card from '../../ui/card/Card';

const OfferItem = ({ img, desc, price, onClick }) => {
  return (
    <div className={classes.offerItem}>
      <Card onClick={onClick}>
        <img src={img} alt='Offer Image' />
        <p>
          {desc}
          <span className={classes.offerPrice}> {price} </span>
        </p>
      </Card>
    </div>
  );
};

export default OfferItem;
