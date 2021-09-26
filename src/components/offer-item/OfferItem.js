import classes from './OfferItem.module.css';
import Card from '../../ui/card/Card';

const OfferItem = ({ img, desc, price, onClick }) => {
  return (
    <div className={classes.offerItem}>
      <Card onClick={onClick}>
        <img src={img} />
        <p>
          {desc}
          <span className={classes.offerPrice}> {`price: ${price}$`} </span>
        </p>
      </Card>
    </div>
  );
};

export default OfferItem;
