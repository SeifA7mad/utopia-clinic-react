import { Link } from 'react-router-dom';

import classes from './Home.module.css';
import Button from '../../ui/form-content/button/Button';
import MainHeading from '../../components/main-heading/MainHeading';
const Home = () => {
  return (
    <>
      <MainHeading
        headTxt='Diagnostic Center'
        subTxt='Nulla consectetur cillum laboris aliqua do excepteur. Pariatur aliquip ut esse fugiat occaecat excepteur id ex est et. Ut ipsum nulla veniam est dolor duis cupidatat commodo enim proident id duis deserunt. Dolor Lorem nisi mollit exercitation.'
        split={true}
      />
      <div className={classes.btns}>
        <Link to=''>
          <Button type='link'> Clinic Reservation </Button>
        </Link>
        <Link to=''>
          <Button type='link'> Ask a doctor </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
