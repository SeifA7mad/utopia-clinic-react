import classes from './ProgressIcon.module.css';

const ProgressIcon = ({ active, text, icon }) => {
  const classList = `${classes.progressIcon} ${active ? classes.active : ''}`;
  return (
    <li className={classList}>
      <span>
        <i className={icon} aria-hidden='true'></i>
      </span>
      <h2> {text} </h2>
    </li>
  );
};

export default ProgressIcon;
