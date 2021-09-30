import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import logo from '../../assets/images/Utopia-logo.png';
import IconText from '../../ui/icons/IconText';

const Footer = () => {
  return (
    <div className={classes.footerContent}>
      <div className={classes.topContent}>
        <img src={logo} alt='Logo' />
        <div className={classes.social}>
          <h3> Follow us - </h3>
          <IconText icon='fa fa-instagram' />
          <IconText icon='fa fa-facebook' />
          <IconText icon='fa fa-twitter' />
          <IconText icon='fa fa-google' />
        </div>
      </div>
      <div className={classes.bottomContent}>
        <div className={classes.bottomContent1}>
          <h1> About Us</h1>
          <p>
            Minim non fugiat excepteur ipsum. Est deserunt do labore in
            consequat ullamco minim. Do adipisicing enim laborum nulla sint
            voluptate non velit ipsum nulla labore quis do deserunt. Proident
            non nisi fugiat.
          </p>
          <IconText icon='fa fa-phone' textInfo='01028877643' />
          <IconText icon='fa fa-map-marker' textInfo='Mokattam' />
          <IconText icon='fa fa-clock-o' textInfo='6:00am to 4:00pm' />
        </div>
        <div className={classes.bottomContent2}>
          <h1> Explore </h1>
          <Link to='./'> Home </Link>
          <Link to='./offers'> Offers </Link>
          <Link to='./about'> About </Link>
          <Link to='./reservation'> Reservation </Link>
          <Link to='./Account'> account </Link>
        </div>
        <div className={classes.bottomContent3}>
          <h1> Recent News </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
