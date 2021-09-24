import classes from './BackgroundImg.module.css';

const BackgroundImg = (props) => {
  return <div className={classes.backgroundImg}>{props.children}</div>
};

export default BackgroundImg;
