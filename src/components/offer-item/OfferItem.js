import classes from './OfferItem.module.css';
import Card from '../../ui/card/Card';

const OfferItem = ({ img, desc, price, onClick, id }) => {
  return (
    <div className={classes.offerItem}>
      <Card onClick={onClick}>
        <img src={img} alt={`offer-img-${id}`}/>
        <p>
          {desc}
          <span className={classes.offerPrice}> {`price: ${price}$`} </span>
        </p>
      </Card>
    </div>
  );
};

export default OfferItem;
