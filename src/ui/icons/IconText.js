import classes from './IconText.module.css';

import React from 'react';

const IconText = ({icon, onClick, textInfo, children}) => {
  const classList = `${icon} ${onClick ? classes.clickIcon : null}`;
  return (
    <div className={classes.iconText}>
      <i className={classList} onClick={onClick} />
      {textInfo && <p> {textInfo} </p>}
      {children}
    </div>
  );
};

export default IconText;
