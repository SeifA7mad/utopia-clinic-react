import { useState } from 'react';
import UseInput from '../../hooks/use-input';
import MultiStepProgressBar from '../../ui/form-content/multi-step-progress-bar/MultiStepProgressBar';
import Button from '../../ui/form-content/button/Button';
import classes from './ReservationForm.module.css';
import ReserveInputs from './multi-step-forms/ReserveInputs';
import PaymentInputs from './multi-step-forms/PaymentInputs';
// const initialState = {
//   activeForm: 'Reservation',
//   activeLength: 1,
// };

// const FormStateReducer = (state, action) => {
//   if (action.type === 'NEXT') {
//     let formLength = state.activeLength;
//     return {
//       activeForm: action.formName,
//       activeLength: ++formLength,
//     };
//   }

//   if (action.type === 'PERVIOUS') {
//     let formLength = state.activeLength;
//     return {
//       activeForm: action.formName,
//       activeLength: --formLength,
//     };
//   }
// };

const ReservationForm = () => {
  //   const [fromState, dispatch] = useReducer(FormStateReducer, initialState);
  const formContent = new Map([
    ['reservation', <ReserveInputs />],
    ['payment', <PaymentInputs />],
  ]);
  
  const [activeLength, setActiveLength] = useState(1);

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

  const button =
    activeLength === progressContent.length ? (
      <Button type='submit'> Reserve </Button>
    ) : (
      <Button type='link' click={onNextHandler}>
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
          {button}
        </div>
      </form>
    </>
  );
};

export default ReservationForm;
