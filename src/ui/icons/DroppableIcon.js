import { useState } from 'react';
import Button from '../form-content/button/Button';
import Modal from '../modals/Modal';
import classes from './DroppableIcon.module.css';
import IconText from './IconText';

let draggedData = null;

const DroppableIcon = ({ onConfirm, icon, onDropClass, onConfirmText }) => {
  const [iconState, setIconState] = useState('default');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OnModalCloseHandler = () => {
    setIsModalOpen(false);
    setIconState('default');
  };

  const onDropHandler = (event) => {
    draggedData = event.dataTransfer.getData('id');
    setIsModalOpen(true);
  };

  const onDragOverHandler = (event) => {
    event.preventDefault();
    setIconState('drop');
  };

  const onDragLeaveHandler = () => {
    if (iconState !== 'default') {
      setIconState('default');
    }
  };

  const onConfirmHandler = () => {
    onConfirm(+draggedData);
    OnModalCloseHandler();
  };

  const classNames = {
    default: classes.droppableIcon,
    drop: `${classes.droppableIcon} ${onDropClass}`,
  };

  return (
    <>
      <div
        className={classNames[iconState]}
        onDrop={onDropHandler}
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
      >
        <IconText icon={icon} />
      </div>
      {isModalOpen && (
        <Modal onClose={OnModalCloseHandler}>
          <h2> {onConfirmText} </h2>
          <Button type='link' click={onConfirmHandler}>
            Confirm
          </Button>
          <Button type='exit' click={OnModalCloseHandler}>
            Close
          </Button>
        </Modal>
      )}
    </>
  );
};

export default DroppableIcon;
