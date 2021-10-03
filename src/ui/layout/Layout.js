import { useLocation } from 'react-router-dom';

import DetailsHead from '../../components/deatils-head/DetailsHead';
import BackgroundImg from '../backgroung-img/BackgroundImg';
import Navbar from '../../components/navbar/Navbar';
import classes from './Layout.module.css';
import Footer from '../../components/footer/Footer';


const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const isDashboard = pathname.includes('/dashboard');

  const mainClasses = !isDashboard
    ? classes.mainContent
    : classes.dashboardContent;

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
        <div className={mainClasses}>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
