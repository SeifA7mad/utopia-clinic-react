import Input from "../../../ui/form-content/input/Input"
const ReserveInputs = ({inputObj}) => {
    return (
      <>
        <Input type='text' name='clinic' label='Choose Clinic' />
        <Input type='text' name='symtoms' label='Symtoms' />
        <Input type='date' name='date' label='Choose Data' />
        <Input type='time' name='time' label='Choose Time' />
        <Input
          type='text'
          name='details'
          label=' Type any further Information Data'
        />
      </>
    );
}

export default ReserveInputs
