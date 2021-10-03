import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../store/auth-context';
import classes from './ProfileDetails.module.css';
import Button from '../../../ui/form-content/button/Button';
const ProfileDetails = () => {
    const {userToken, logout} = useContext(AuthContext);

    return (
        <div className={classes.profileDetails}>
            <h3> {userToken.userName} </h3>
            {userToken.type !== 'user' && <Link to='/dashboard' replace> Dashboard </Link>}
            <Button click={logout} type='exit'> Logout </Button>
        </div>
    )
}

export default ProfileDetails
