import { useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './DetailsHead.module.css';
import DetailsInfo from './details-info/DetailsInfo';
import SideModal from '../../ui/modals/SideModal';



const portalContianer = document.getElementById('modals');

const DetailsHead = () => {
  const [activeModal, setActiveModal] = useState('');

  const toggleModalHandler = (modalTitle) => {
    if (activeModal === modalTitle) {
      setActiveModal('');
      return;
    }
    setActiveModal(modalTitle);
  };

  const modalContent = {
    profile: <SideModal heading={'Profile'} onClose={toggleModalHandler} />,
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
