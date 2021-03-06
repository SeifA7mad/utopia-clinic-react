import { useState, useContext } from 'react';

import classes from './DetailsHead.module.css';

import { AuthContext } from '../../store/auth-context';
import IconText from '../../ui/icons/IconText';
import Notifications from '../notifications/Notifications';
import ProfileSideModal from '../profile/ProfileSideModal';

// head component handle the activeModal state to only show one side modal profile | notification modal
const DetailsHead = () => {
  const [activeModal, setActiveModal] = useState('');
  const { isLoggedIn, userToken } = useContext(AuthContext);
  const toggleModalHandler = (modalTitle) => {
    // if the pressed btn modalTitle == to the active modal just close it (empty the active modal) => modalContent = ''
    if (activeModal === modalTitle) {
      setActiveModal('');
      return;
    }
    // otherwise set the activeModal with the new modalTitle (modalTitle) => modalContent['modalTitle']
    setActiveModal(modalTitle);
  };

  // object that saves all the possible modal content in keys
  const modalContent = {
    profile: <ProfileSideModal onClose={toggleModalHandler} />,
    notifications: isLoggedIn ? (
      <Notifications onClose={toggleModalHandler} userId={userToken.id} />
    ) : null,
  };

  return (
    <div className={classes.detailsHead}>
      <div className={classes.detailsInfo}>
        <IconText icon='fa fa-phone' textInfo='01028877643' />
        <IconText icon='fa fa-map-marker' textInfo='Mokattam' />
        <IconText icon='fa fa-clock-o' textInfo='6:00am to 4:00pm' />
      </div>
      <div className={classes.detailsBtns}>
        <IconText
          icon='fa fa-user fa-2x profile'
          onClick={() => toggleModalHandler('profile')}
        />
        {isLoggedIn && (
          <IconText
            icon='fa fa-bell-o fa-2x notification'
            onClick={() => toggleModalHandler('notifications')}
          />
        )}
        {activeModal !== '' && modalContent[activeModal]}
      </div>
    </div>
  );
};

export default DetailsHead;
