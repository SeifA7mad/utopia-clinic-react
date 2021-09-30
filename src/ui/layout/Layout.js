import DetailsHead from '../../components/deatils-head/DetailsHead';
import BackgroundImg from '../backgroung-img/BackgroundImg';
import Navbar from '../../components/navbar/Navbar';
import classes from './Layout.module.css';
import Footer from '../../components/footer/Footer';
const Layout = (props) => {
  return (
    <>
      <header>
        <DetailsHead />
        <BackgroundImg>
          <Navbar />
        </BackgroundImg>
      </header>
      <main>
        <div className={classes.mainContent}>{props.children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
