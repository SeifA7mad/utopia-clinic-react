import { useContext } from 'react';

import { AuthContext } from '../../../store/auth-context';
import classes from './ProfileDetails.module.css';
import Button from '../../../ui/form-content/button/Button';
const ProfileDetails = () => {
    const {userToken, logout} = useContext(AuthContext);

    return (
        <div className={classes.profileDetails}>
            <h3> {userToken.userName} </h3>
            <Button click={logout} type='exit'> Logout </Button>
        </div>
    )
}

export default ProfileDetails
