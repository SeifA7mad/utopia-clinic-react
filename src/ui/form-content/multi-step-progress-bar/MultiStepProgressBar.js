import ProgressIcon from './ProgressIcon';
import classes from './MultiStepProgressBar.module.css';


// component: progressbar for multi-step froms
// takes an array of objects to map it into diff parts of text & icons
// takes activeLength to add the active class to the elements of the progressbar that have been already visted
const MultiStepProgressBar = ({ progressContent, activeLength }) => {
  const content = (
    <ul className={classes.progressBar}>
      {progressContent.map((el, index) => (
        <ProgressIcon key={index} text={el.text} icon={el.icon} active={index + 1 <= activeLength} />
      ))}
    </ul>
  );
  return content;
};

export default MultiStepProgressBar;
