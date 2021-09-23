import classes from './SideModal.module.css';

const SideModal = (props) => {
  return (
    <>
      {props.modalIsShown && (
        <div className={classes.sideModal}>
          <h2> {props.heading} </h2> {props.children}
        </div>
      )}
    </>
  );
};

export default SideModal;
