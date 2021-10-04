import classes from './DashboardCard.module.css';

const DashboardCard = ({ children, headerTxt }) => {
  return (
    <div className={classes.dashboardCard}>
      <h2> {headerTxt} </h2>
      {children}
    </div>
  );
};

export default DashboardCard;
