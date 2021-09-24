import classes from './BackgroundImg.module.css';

const BackgroundImg = (props) => (
  <div
    className={classes.backgroundImg}
    style={{ '--backgd-img': `` }}
  >
    {props.children}
  </div>
);

export default BackgroundImg;