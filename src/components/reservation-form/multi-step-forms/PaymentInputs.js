import Input from "../../../ui/form-content/input/Input"
const PaymentInputs = ({inputObj}) => {
    const nameInput = inputObj.nameInput;
    const dateInput = inputObj.dateInput;
    return (
      <>
        <Input
          type='text'
          name='name-on-Card'
          label='Name on Card'
          onChange={nameInput.onChangeInputValueHandler}
          value={nameInput.value}
          onBlur={nameInput.onBlurInputHanlder}
          error={nameInput.inputHasAnError ? nameInput.error : null}
        />
        <Input
          type='date'
          name='expire-date'
          label='Expire Date'
          onChange={dateInput.onChangeInputValueHandler}
          value={dateInput.value}
          onBlur={dateInput.onBlurInputHanlder}
          error={dateInput.inputHasAnError ? dateInput.error : null}
        />
        {/* <Input
          type='password'
          name='cvv'
          label='Cvv'
          onChange={clinicInput.onChangeInputValueHandler}
          value={clinicInput.value}
          onBlur={clinicInput.onBlurInputHanlder}
          error={clinicInput.inputHasAnError ? clinicInput.error : null}
        /> */}
      </>
    );
}

export default PaymentInputs
