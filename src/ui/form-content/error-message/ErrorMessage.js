import classes from './ErrorMessage.module.css';
import DetailsInfo from '../../../components/deatils-head/details-info/DetailsInfo';

const ErrorMessage = (props) => {
  return (
    <div className={classes.errorMessage}>
      <DetailsInfo icon='fa fa-times-circle' textInfo={props.errorText} />
    </div>
  );
};

export default ErrorMessage;
