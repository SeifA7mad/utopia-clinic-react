
import OfferList from '../../components/offer-item/OfferList';
import MainHeading from '../../components/main-heading/MainHeading';

const Offers = () => {
  return (
    <>
      <MainHeading
        headTxt='Off ers'
        subTxt='Duis nisi aliquip incididunt laboris laboris cillum nostrud cillum officia id.'
        split={true}
      />
      <OfferList />
    </>
  );
};

export default Offers;
