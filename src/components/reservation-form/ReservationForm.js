import { useState } from 'react';
import UseInput from '../../hooks/use-input';
import MultiStepProgressBar from '../../ui/form-content/multi-step-progress-bar/MultiStepProgressBar';
import Button from '../../ui/form-content/button/Button';
import classes from './ReservationForm.module.css';
import ReserveInputs from './multi-step-forms/ReserveInputs';
import PaymentInputs from './multi-step-forms/PaymentInputs';

// funtion: to validate if the input value is empty or not
const validateInputs = (inputValue, action = null) => {
  const notEmpty = inputValue.trim() !== '';

  if (action === 'date') {
    const inputDate = new Date(inputValue);
    const curDate = new Date().toISOString.slice(0, 10);
    if (curDate > inputDate) {
      return {
        inputValueIsValid: false,
        error: 'Your Credit Card Expired',
      };
    }
  }

  return {
    inputValueIsValid: notEmpty,
    error: 'Info Required',
  };
};

// component: multi-step form with progressbar
const ReservationForm = () => {
  // inputs for the reservation form
  const clinicInput = UseInput(validateInputs);
  const symtomsInput = UseInput(validateInputs);
  const infoInput = UseInput(validateInputs);
  // inputs for the payment form
  const nameInput = UseInput(validateInputs);
  const dateInput = UseInput(validateInputs);
  const cvvInput = UseInput(validateInputs);
  // overall form validaty to know if the user can submit or not
  const formValidaty =
    !clinicInput.inputValueIsValid ||
    !symtomsInput.inputValueIsValid ||
    !nameInput.inputValueIsValid ||
    !dateInput.inputValueIsValid;

  // map for the different forms in the multi-step form
  const formContent = [
    <ReserveInputs inputObj={{ clinicInput, symtomsInput, infoInput }} />,
    <PaymentInputs inputObj={{ nameInput, dateInput, cvvInput }} />,
  ];

  // state: to handle the forms has been visted
  const [activeLength, setActiveLength] = useState(1);

  // array for the diff text & icons in the progressbar
  const progressContent = [
    { text: 'Reservation', icon: 'fa fa-handshake-o' },
    {
      text: 'Payment',
      icon: 'fa fa-credit-card',
    },
  ];

  const onNextHandler = () => {
    setActiveLength((prevState) => ++prevState);
  };

  const onPreviousHandler = () => {
    setActiveLength((prevState) => --prevState);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // later: send http request to the backend to save the reservations data to the DB
    // Redirect the user to the recipet
  };

  return (
    <>
      <MultiStepProgressBar
        progressContent={progressContent}
        activeLength={activeLength}
      />
      <form className={classes.reservationForm} onSubmit={onSubmitHandler}>
        <div className={classes.inputs}>{formContent[activeLength - 1]}</div>
        <div className={classes.buttons}>
          {activeLength > 1 && (
            <Button type='link' click={onPreviousHandler}>
              Previous
            </Button>
          )}
          {activeLength === progressContent.length && (
            <Button type='submit' disabled={formValidaty}> Reserve </Button>
          )}
          {activeLength !== progressContent.length && (
            <Button type='link' click={onNextHandler}>
              Next
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default ReservationForm;
