import { useLocation } from 'react-router-dom';

import DetailsHead from '../../components/deatils-head/DetailsHead';
import BackgroundImg from '../backgroung-img/BackgroundImg';
import Navbar from '../../components/navbar/Navbar';
import classes from './Layout.module.css';
import Footer from '../../components/footer/Footer';


const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const isDashboard = pathname.includes('/dashboard');

  return (
    <>
      <header>
        <DetailsHead />
        {!isDashboard && (
          <BackgroundImg>
            <Navbar />
          </BackgroundImg>
        )}
      </header>
      <main>
        {!isDashboard && <div className={classes.mainContent}>{children}</div>}
        {isDashboard && children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
