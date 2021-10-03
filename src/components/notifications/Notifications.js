import { useEffect, useState } from 'react';

import { dummyNotificationData } from '../../store/dummy-data';
import ErrorMessage from '../../ui/form-content/error-message/ErrorMessage';
import SideModal from '../../ui/modals/SideModal';
import NotificationItem from './NotificationItem';

import classes from './Notifications.module.css';

const Notifications = ({ userId, onClose }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // later: send http request to get the notifications for the logged in user
    // now: using this dummyNotificationData to get this data
    const userNotifications = dummyNotificationData[userId];
    setNotifications(userNotifications);
  }, [userId]);

  const onRemoveNotificationHandler = (id) => {
    // later: send http request to remove the pressed notification from the DB
    const filteredNotifications = notifications.filter(
      (_, index) => index !== id
    );
    setNotifications(filteredNotifications);
  };

  let content = <ErrorMessage className={classes.error} errorText='no notifications' />;

  if (notifications.length > 0) {
    content = notifications.map((txt, index) => (
      <NotificationItem
        key={index}
        notifiId={index}
        notifiTxt={txt}
        onRemove={onRemoveNotificationHandler}
      />
    ));
  }

  return (
    <SideModal heading={'Notifications'} onClose={onClose}>
      <div className={classes.notifications}>{content}</div>
    </SideModal>
  );
};

export default Notifications;
