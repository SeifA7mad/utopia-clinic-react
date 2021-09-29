import { useReducer } from 'react';
import UseInput from '../../hooks/use-input';
import MultiStepProgressBar from '../../ui/form-content/multi-step-progress-bar/MultiStepProgressBar';
import classes from './ReservationForm.module.css';

const initialState = {
  activeForm: 'Reservation',
  activeLength: 1,
};

const FormStateReducer = (state, action) => {
    if (action.type === 'NEXT') {
        let formLength = state.activeLength;
        return {
            activeForm: action.formName,
            activeLength: ++formLength
        };
    }

     if (action.type === 'PERVIOUS') {
       let formLength = state.activeLength;
       return {
         activeForm: action.formName,
         activeLength: --formLength,
       };
     }
};

const ReservationForm = () => {
  const [fromState, dispatch] = useReducer(FormStateReducer, initialState);

  const progressContent = [
    { text: 'Reservation', icon: 'fa fa-handshake-o' },
    {
      text: 'Payment',
      icon: 'fa fa-credit-card',
    },
    {
      text: 'Payment',
      icon: 'fa fa-credit-card',
    },
  ];

  const formContent = {};
  return (
    <>
      <MultiStepProgressBar progressContent={progressContent} activeLength={fromState.activeLength} />
    </>
  );
};

export default ReservationForm;
