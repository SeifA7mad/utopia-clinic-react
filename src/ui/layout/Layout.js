import DetailsHead from '../../components/deatils-head/DetailsHead';
import BackgroundImg from '../backgroung-img/BackgroundImg';
import Navbar from '../../components/navbar/Navbar';
import classes from './Layout.module.css';
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
    </>
  );
};

export default Layout;
