import { useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './DetailsHead.module.css';
import DetailsInfo from './details-info/DetailsInfo';
import SideModal from '../../ui/modals/SideModal';

const portalContianer = document.getElementById('modals');

const DetailsHead = () => {
  const [profileModalIsShown, setProfileModalIsShown] = useState(false);
  const [notiModalIsShown, setNotiModalIsShown] = useState(false);

  const toggleProfileModalHandler = () => {
    setProfileModalIsShown((prevState) => !prevState);
    setNotiModalIsShown(false);
  };

  const toggleNotiModalHandler = () => {
    setNotiModalIsShown((prevState) => !prevState);
    setProfileModalIsShown(false);
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
          onClick={toggleProfileModalHandler}
        />
        <DetailsInfo
          icon='fa fa-bell-o fa-2x notification'
          onClick={toggleNotiModalHandler}
        />
        {profileModalIsShown && createPortal(<SideModal heading='Profile' />, portalContianer)}
        {notiModalIsShown && createPortal(<SideModal heading='Notification' />, portalContianer)}
      </div>
    </div>
  );
};

export default DetailsHead;
