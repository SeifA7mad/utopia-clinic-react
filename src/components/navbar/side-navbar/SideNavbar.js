import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '../../../store/auth-context';

import IconText from '../../../ui/icons/IconText';
import classes from './SideNavbar.module.css';

const pathname = '/dashboard';

const SideNavbar = () => {
    const {userToken} = useContext(AuthContext);
    
    return (
      <nav className={classes.sideNavbar}>
        <ul>
          <li>
            <NavLink to={pathname} activeClassName={classes.active} exact>
              <IconText icon='fa fa-home' textInfo='Home' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${pathname}/profile`}
              activeClassName={classes.active}
            >
              <IconText icon='fa fa-user' textInfo='Profile' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${pathname}/reports`}
              activeClassName={classes.active}
            >
              <IconText icon='fa fa-file-text' textInfo='Reports' />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${pathname}/archives`}
              activeClassName={classes.active}
            >
              <IconText icon='fa fa-archive' textInfo='Archives' />
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default SideNavbar
