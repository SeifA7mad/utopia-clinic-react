import { Link } from 'react-router-dom';

import Button from '../../ui/form-content/button/Button';
import Card from '../../ui/card/Card';
import DiagnosticsTypeCards from './DiagnosticsTypeCards';

import classes from './HomeContent.module.css';

const HomeContent = () => {
  return (
    <>
      <div className={classes.btns}>
        <Link to='/reservation'>
          <Button type='link'> Clinic Reservation </Button>
        </Link>
        <Link to=''>
          <Button type='link' className={classes.btn2}>
            Ask a doctor
          </Button>
        </Link>
      </div>
      <div className={classes.cards}>
        <Card className={classes.card1}>
          <h1> World leader <span>in diagnostics </span></h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            blanditiis neque laudantium eos exercitationem quaerat dolorem
            optio, expedita dolor ab aliquid sequi nesciunt ea pariatur sint
            voluptate enim accusamus? Eius.
          </p>
          <Button type='link'> Reservation </Button>
        </Card>
        <DiagnosticsTypeCards />
      </div>
    </>
  );
};

export default HomeContent;
