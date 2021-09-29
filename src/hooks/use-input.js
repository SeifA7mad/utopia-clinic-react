import { useReducer } from 'react';

const initialState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
      return { value: action.val, isTouched: state.isTouched };
    }

    if (action.type === 'BLUR') {
      return { value: state.value, isTouched: true };
    }

    if (action.type === 'RESET') {
      return { value: '', isTouched: false };
    }

    return initialState;
}

const UseInput = (validate) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

    const {inputValueIsValid, error} = validate(inputState.value);
    const inputHasAnError = !inputValueIsValid && inputState.isTouched;

    const onChangeInputValueHandler = (event) => {
        event.preventDefault();
        dispatch({type: 'INPUT', val: event.target.value});
    }

    const onBlurInputHanlder = () => {
        dispatch({type: 'BLUR'});
    }

    const onResetInputHandler = () => {
        dispatch({type: 'RESET'});
    }

    return {
        value: inputState.value,
        inputHasAnError,
        error,
        onChangeInputValueHandler,
        onBlurInputHanlder,
        onResetInputHandler
    }

};

export default UseInput;
