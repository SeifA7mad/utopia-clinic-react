import SideNavbar from '../../components/navbar/side-navbar/SideNavbar';
import DashboardContent from '../../components/dassboard-content/DashboardContent';
import classes from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <SideNavbar />
            <DashboardContent />
        </div>
    )
}

export default Dashboard
