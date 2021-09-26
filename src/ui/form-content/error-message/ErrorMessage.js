import classes from './ErrorMessage.module.css';

import IconText from '../../icons/IconText';

const ErrorMessage = ({errorText}) => {
  return (
    <div className={classes.errorMessage}>
      <IconText icon='fa fa-times-circle' textInfo={errorText} />
    </div>
  );
};

export default ErrorMessage;
