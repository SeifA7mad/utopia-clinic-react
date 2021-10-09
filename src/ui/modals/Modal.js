import { createPortal } from 'react-dom';

import Backdrop from './backdrop/Backdrop';
import classes from './Modal.module.css';

const portalContianer = document.getElementById('modals');

const Modal = (props) => {
    return (
      <>
        {createPortal(<Backdrop onClose={props.onClose} />, portalContianer)}
        {createPortal(
          <div className={classes.modal}>
            {props.children}
          </div>,
          portalContianer
        )}
      </>
    );
}

export default Modal
