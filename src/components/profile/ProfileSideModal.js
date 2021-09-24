import { useContext } from 'react';

import { AuthContext } from '../../store/auth-context';

import SideModal from '../../ui/modals/SideModal';
import LoginForm from './login-form/LoginForm';
import ProfileDetails from './profile-details/ProfileDetails';

const ProfileSideModal = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <SideModal heading={isLoggedIn ? 'Profile' : 'Sign in'} onClose={props.onClose}>
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <ProfileDetails />}
    </SideModal>
  );
};

export default ProfileSideModal;
