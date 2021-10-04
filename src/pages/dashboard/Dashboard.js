import DashboardCard from '../../ui/card/dashboard-card/DashboardCard';
import SideNavbar from '../../components/navbar/side-navbar/SideNavbar';
import Table from '../../ui/table/Table';

import classes from './Dashboard.module.css';
import { dummyUserData } from '../../store/dummy-data';

const tableHead = ['User Name', 'User Email','User Type'];

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <SideNavbar />
        </div>
    )
}

export default Dashboard
