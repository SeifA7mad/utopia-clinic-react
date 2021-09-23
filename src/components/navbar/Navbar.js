import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul className={classes.navbar}>
        <li>
          <NavLink to=''> Home </NavLink>
        </li>
        <li>
          <NavLink to=''> Offers </NavLink>
        </li>
        <li>
          <NavLink to=''> About </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
