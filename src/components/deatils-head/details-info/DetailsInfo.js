import classes from './DetailsInfo.module.css';

// component returns a specified icon align with a text via props
// props: icon: icon string
//        textInfo: text string
const DetailsInfo = (props) => {
  const classList = `${props.icon} ${props.onClick ? classes.clickIcon : null}`;
  return (
    <div className={classes.detailsInfo}>
      <i className={classList} onClick={props.onClick} />
      {props.textInfo && <p> {props.textInfo} </p>}
    </div>
  );
};

export default DetailsInfo;
