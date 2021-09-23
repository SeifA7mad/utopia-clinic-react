import classes from './ErrorMessage.module.css';

import IconText from '../../icons/IconText';

const ErrorMessage = (props) => {
  return (
    <div className={classes.errorMessage}>
      <IconText icon='fa fa-times-circle' textInfo={props.errorText} />
    </div>
  );
};

export default ErrorMessage;
