import { useState } from 'react';
import UseInput from '../../hooks/use-input';
import MultiStepProgressBar from '../../ui/form-content/multi-step-progress-bar/MultiStepProgressBar';
import Button from '../../ui/form-content/button/Button';
import classes from './ReservationForm.module.css';
import ReserveInputs from './multi-step-forms/ReserveInputs';
import PaymentInputs from './multi-step-forms/PaymentInputs';

// funtion: to validate if the input value is empty or not
const validateForEmpty = (inputValue) => {
  return {
    inputValueIsValid: inputValue.trim() !== '',
    error: 'Info Required',
  };
};

// component: multi-step form with progressbar
const ReservationForm = () => {
  const clinicInput = UseInput(validateForEmpty);
  const symtomsInput = UseInput(validateForEmpty);
  const infoInput = UseInput(validateForEmpty);
  // overall form validaty to know if the user can submit or not
  const formValidaty =
    !clinicInput.inputValueIsValid || !symtomsInput.inputValueIsValid;

  // map for the different forms in the multi-step form
  const formContent = new Map([
    [
      'reservation',
      <ReserveInputs inputObj={{ clinicInput, symtomsInput, infoInput }} />,
    ],
    ['payment', <PaymentInputs />],
  ]);

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
  };

  const submitButton =
    activeLength === progressContent.length ? (
      <Button type='submit'> Reserve </Button>
    ) : (
      <Button type='link' disabled={formValidaty} click={onNextHandler}>
        Next
      </Button>
    );

  return (
    <>
      <MultiStepProgressBar
        progressContent={progressContent}
        activeLength={activeLength}
      />
      <form className={classes.reservationForm} onSubmit={onSubmitHandler}>
        <div className={classes.inputs}>
          {formContent.get(Array.from(formContent.keys())[activeLength - 1])}
        </div>
        <div className={classes.buttons}>
          {activeLength > 1 && (
            <Button type='link' click={onPreviousHandler}>
              Previous
            </Button>
          )}
          {submitButton}
        </div>
      </form>
    </>
  );
};

export default ReservationForm;
