import UseTable from '../../../hooks/use-table';
import DashboardCard from '../../../ui/card/dashboard-card/DashboardCard';
import Table from '../../../ui/table/Table';
import Button from '../../../ui/form-content/button/Button';
import { dummyUserData, offersData } from '../../../store/dummy-data';

import classes from './Archives.module.css';


const Archives = () => {
  const { tableData, activeTableName, onChangeTableData } = UseTable();

  const onUserClickedHandler = () => {
    onChangeTableData(dummyUserData, 'users');
  };

  const onOfferClickedHandler = () => {
    onChangeTableData(offersData, 'offers');
  };

  const tableContent = {
    users: {
      tableHead: ['ID', ' User Name', 'Email', 'Type'],
      tableBody: activeTableName === 'users' ? tableData : null,
      ignoredData: ['pass'],
      dragable: false,
    },
    offers: {
      tableHead: ['ID', 'Decsription', 'price'],
      tableBody: activeTableName === 'offers' ? tableData : null,
      ignoredData: ['img'],
      dragable: true,
    },
  };

  return (
    <DashboardCard headerTxt='Archives'>
      <div className={classes.archivesBtns}>
        <Button
          type='link'
          click={onUserClickedHandler}
          activeClass={activeTableName === 'users' ? classes.active : null}
        >
          Users
        </Button>
        <Button
          type='link'
          click={onOfferClickedHandler}
          activeClass={activeTableName === 'offers' ? classes.active : null}
        >
          Offers
        </Button>
      </div>
      {tableData && (
        <Table
          tableHeadData={tableContent[activeTableName].tableHead}
          tableBodyData={tableContent[activeTableName].tableBody}
          ignoreData={tableContent[activeTableName].ignoredData}
          dragable={tableContent[activeTableName].dragable}
        />
      )}
    </DashboardCard>
  );
};

export default Archives;
