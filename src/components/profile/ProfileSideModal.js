import { useContext } from 'react';

import { AuthContext } from '../../store/auth-context';

import SideModal from '../../ui/modals/SideModal';
import LoginForm from './login-form/LoginForm';

const ProfileSideModal = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <SideModal heading={isLoggedIn ? 'Profile' : 'Sign in'} onClose={props.onClose}>
      {!isLoggedIn && <LoginForm />}
    </SideModal>
  );
};

export default ProfileSideModal;
