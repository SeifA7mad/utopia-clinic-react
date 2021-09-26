import classes from './Offers.module.css';

import OfferList from '../../components/offer-item/OfferList';
import MainHeading from '../../components/main-heading/MainHeading';

const Offers = () => {
  return (
    <>
      <MainHeading
        headTxt='Offers'
        subTxt='Duis nisi aliquip incididunt laboris laboris cillum nostrud cillum officia id.'
      />
      <OfferList />
    </>
  );
};

export default Offers;
