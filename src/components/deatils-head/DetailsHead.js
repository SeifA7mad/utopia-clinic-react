import { useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './DetailsHead.module.css';
import DetailsInfo from './details-info/DetailsInfo';
import SideModal from '../../ui/modals/SideModal';
import ProfileSideModal from '../profile/ProfileSideModal';

const portalContianer = document.getElementById('modals');

// head component handle the activeModal state to only show one side modal profile | notification modal
const DetailsHead = () => {
  const [activeModal, setActiveModal] = useState('');

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
    notifications: (
      <SideModal heading={'Notifications'} onClose={toggleModalHandler} />
    ),
  };

  return (
    <div className={classes.detailsHead}>
      <div className={classes.detailsInfo}>
        <DetailsInfo icon='fa fa-phone' textInfo='01028877643' />
        <DetailsInfo icon='fa fa-map-marker' textInfo='Mokattam' />
        <DetailsInfo icon='fa fa-clock-o' textInfo='6:00am to 4:00pm' />
      </div>
      <div className={classes.detailsBtns}>
        <DetailsInfo
          icon='fa fa-user fa-2x profile'
          onClick={() => toggleModalHandler('profile')}
        />
        <DetailsInfo
          icon='fa fa-bell-o fa-2x notification'
          onClick={() => toggleModalHandler('notifications')}
        />
        {activeModal !== '' &&
          createPortal(modalContent[activeModal], portalContianer)}
      </div>
    </div>
  );
};

export default DetailsHead;
