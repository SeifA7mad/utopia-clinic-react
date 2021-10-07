import { useState } from 'react';

import DashboardCard from '../../../ui/card/dashboard-card/DashboardCard';
import Table from '../../../ui/table/Table';
import Button from '../../../ui/form-content/button/Button';
import { dummyUserData, offersData } from '../../../store/dummy-data';

import classes from './Archives.module.css';

const tableData = {
  users: {
    tableHead: ['User Name', 'Email', 'Type'],
    tableBody: dummyUserData,
    ignoredData: ['pass'],
  },
  offers: {
    tableHead: ['ID', 'Decsription', 'price'],
    tableBody: offersData,
    ignoredData: ['img'],
  },
};

const Archives = () => {
  const [tableDataOf, setTableDataOf] = useState(null);

  const onUserClickedHandler = () => {
    setTableDataOf('users');
  };

  const onOfferClickedHandler = () => {
    setTableDataOf('offers');
  };
  return (
    <DashboardCard headerTxt='Archives'>
      <div className={classes.archivesBtns}>
        <Button
          type='link'
          click={onUserClickedHandler}
          activeClass={tableDataOf === 'users' ? classes.active : null}
        >
          Users
        </Button>
        <Button
          type='link'
          click={onOfferClickedHandler}
          activeClass={tableDataOf === 'offers' ? classes.active : null}
        >
          Offers
        </Button>
      </div>
      {tableDataOf && (
        <Table
          tableHeadData={tableData[tableDataOf].tableHead}
          tableBodyData={tableData[tableDataOf].tableBody}
          ignoreData={tableData[tableDataOf].ignoredData}
        />
      )}
    </DashboardCard>
  );
};

export default Archives;
