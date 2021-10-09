import { createPortal } from 'react-dom';

import classes from './SideModal.module.css';
import Backdrop from './backdrop/Backdrop';

const portalContianer = document.getElementById('modals');

const SideModal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalContianer)}
      {createPortal(
        <div className={classes.sideModal}>
          <h2> {props.heading} </h2> {props.children}
        </div>,
        portalContianer
      )}
    </>
  );
};

export default SideModal;
