import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <NavLink to='/home' activeClassName={classes.active} exact> Home </NavLink>
        </li>
        <li>
          <NavLink to='/offers' activeClassName={classes.active}> Offers </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName={classes.active}> About </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
