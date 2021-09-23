import classes from './SideModal.module.css';
import Backdrop from './backdrop/Backdrop';

const SideModal = (props) => {
  return (
    <>
    <div className={classes.sideModal}>
      <h2> {props.heading} </h2> {props.children}
    </div>
    <Backdrop onClose={props.onClose}/>
    </>
  );
};

export default SideModal;
