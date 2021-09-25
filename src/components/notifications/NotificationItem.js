import classes from './NotificationItem.module.css';

const NotificationItem = ({ onRemove, notifiTxt, notifiId }) => {
  return (
    <section
      className={classes.notificationItem}
      onClick={() => onRemove(notifiId)}
    >
      <p> {notifiTxt} </p>
    </section>
  );
};

export default NotificationItem;
