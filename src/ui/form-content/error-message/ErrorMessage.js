import classes from './ErrorMessage.module.css';

import IconText from '../../icons/IconText';

const ErrorMessage = ({errorText, className=''}) => {
  return (
    <div className={`${classes.errorMessage} ${className}`}>
      <IconText icon='fa fa-times-circle' textInfo={errorText} />
    </div>
  );
};

export default ErrorMessage;
