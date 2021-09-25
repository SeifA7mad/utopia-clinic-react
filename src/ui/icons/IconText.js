import classes from './IconText.module.css';

import React from 'react';

const IconText = ({icon, onClick, textInfo}) => {
  const classList = `${icon} ${onClick ? classes.clickIcon : null}`;
  return (
    <div className={classes.iconText}>
      <i className={classList} onClick={onClick} />
      {textInfo && <p> {textInfo} </p>}
    </div>
  );
};

export default IconText;
