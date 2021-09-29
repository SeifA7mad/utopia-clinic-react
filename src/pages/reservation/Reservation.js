import MainHeading from '../../components/main-heading/MainHeading';
import ReservationForm from '../../components/reservation-form/ReservationForm';

const Reservation = () => {
    return (
      <>
        <MainHeading
          headTxt='Reservation'
          subTxt='Duis nisi aliquip incididunt laboris laboris cillum nostrud cillum officia id.'
        />
        <ReservationForm />
      </>
    );
}

export default Reservation
