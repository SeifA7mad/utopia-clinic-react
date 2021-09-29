import ProgressIcon from './ProgressIcon';
import classes from './MultiStepProgressBar.module.css';

const MultiStepProgressBar = ({ progressContent, activeLength }) => {
  const content = (
    <ul className={classes.progressBar}>
      {progressContent.map((el, index) => (
        <ProgressIcon text={el.text} icon={el.icon} active={index + 1 <= activeLength} />
      ))}
    </ul>
  );
  return content;
};

export default MultiStepProgressBar;
