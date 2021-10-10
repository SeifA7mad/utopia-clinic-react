import classes from './MainHeading.module.css';

const MainHeading = ({ headTxt, subTxt, split = false }) => {
  let content = <h1> {headTxt} </h1>;
  if (split) {
    const splitedHeading = headTxt.split(' ');
    content = (
      <h1>
        {splitedHeading[0]}<span> {splitedHeading[1]} </span>
      </h1>
    );
  }
  return (
    <section className={classes.mainHeading}>
      {content}
      <p>{subTxt}</p>
    </section>
  );
};

export default MainHeading;
