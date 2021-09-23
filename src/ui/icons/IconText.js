import classes from './IconText.module.css';

import React from 'react';

const IconText = (props) => {
  const classList = `${props.icon} ${props.onClick ? classes.clickIcon : null}`;
  return (
    <div className={classes.iconText}>
      <i className={classList} onClick={props.onClick} />
      {props.textInfo && <p> {props.textInfo} </p>}
    </div>
  );
};

export default IconText;
