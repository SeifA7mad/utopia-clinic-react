import { useContext } from 'react';

import { AuthContext } from '../../../store/auth-context';
import classes from './ProfileDetails.module.css';
import Button from '../../../ui/form-content/button/Button';
const ProfileDetails = () => {
    const authCtx = useContext(AuthContext);

    return (
        <div className={classes.profileDetails}>
            <Button click={authCtx.logout} type='exit'> Logout </Button>
        </div>
    )
}

export default ProfileDetails
