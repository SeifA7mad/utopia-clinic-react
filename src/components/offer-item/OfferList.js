import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import OfferItem from './OfferItem';
import ErrorMessage from '../../ui/form-content/error-message/ErrorMessage';
import classes from './OfferList.module.css';

import { offersData } from '../../store/dummy-data';

const OfferList = () => {
  const [offerList, setOfferList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    // later: send http request to the the offers data
    setOfferList(offersData);
  }, []);

  const onClickOfferHandler = () => {
    // history.push('/reservation');
  };

  let content = <ErrorMessage errorText='No Offers today :(' />;
  if (offerList.length > 0) {
    content = offerList.map((offer) => (
      <OfferItem
        key={offer.id}
        desc={offer.desc}
        price={offer.price}
        img={offer.img}
        onClick={onClickOfferHandler}
      />
    ));
  }
  return <div className={classes.offerList}> {content} </div>;
};

export default OfferList;
