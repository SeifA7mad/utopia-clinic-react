import Input from "../../../ui/form-content/input/Input"
const ReserveInputs = ({inputObj}) => {
    const clinicInput = inputObj.clinicInput;
    const symtomsInput = inputObj.symtomsInput;
    const infoInput = inputObj.infoInput;
    return (
      <>
        <Input
          type='text'
          name='clinic'
          label='Choose Clinic'
          onChange={clinicInput.onChangeInputValueHandler}
          value={clinicInput.value}
          onBlur={clinicInput.onBlurInputHanlder}
          error={clinicInput.inputHasAnError ? clinicInput.error : null}
        />
        <Input
          type='text'
          name='symtoms'
          label='Symtoms'
          onChange={symtomsInput.onChangeInputValueHandler}
          value={symtomsInput.value}
          onBlur={symtomsInput.onBlurInputHanlder}
          error={symtomsInput.inputHasAnError ? symtomsInput.error : null}
        />
        <Input
          type='text'
          name='details'
          label=' Type any further Information Data'
          onChange={infoInput.onChangeInputValueHandler}
          value={infoInput.value}
        />
      </>
    );
}

export default ReserveInputs
