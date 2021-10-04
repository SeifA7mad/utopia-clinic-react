import DashboardCard from '../../ui/card/dashboard-card/DashboardCard';
import SideNavbar from '../../components/navbar/side-navbar/SideNavbar';
import Table from '../../ui/table/Table';

import classes from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <SideNavbar />
            <DashboardCard headerTxt='Archives'> <Table /> </DashboardCard>
        </div>
    )
}

export default Dashboard
