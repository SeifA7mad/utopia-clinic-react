import UseTable from '../../../hooks/use-table';
import DashboardCard from '../../../ui/card/dashboard-card/DashboardCard';
import Table from '../../../ui/table/Table';
import Button from '../../../ui/form-content/button/Button';

import { dummyUserData, offersData } from '../../../store/dummy-data';

import classes from './Archives.module.css';
import DroppableIcon from '../../../ui/icons/DroppableIcon';

const userDataTransform = [];

for (let dataKey in dummyUserData) {
  userDataTransform.push({ id: +dataKey, ...dummyUserData[dataKey] });
}

const Archives = () => {
  const { tableData, activeTableName, onChangeTableData, onDeleteTableData } =
    UseTable();

  const onUserClickedHandler = () => {
    //later: send http request to get the users data
    onChangeTableData(userDataTransform, 'users');
  };

  const onOfferClickedHandler = () => {
    //later: send http request to get the offers data
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

  const onDragStart = (event, id) => {
    event.dataTransfer.setData('id', id);
  };

  const onItemRemove = (id) => {
    //later: send http request to remove the data
    onDeleteTableData(id);
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
      {!!activeTableName && (
        <Table
          tableHeadData={tableContent[activeTableName].tableHead}
          tableBodyData={tableContent[activeTableName].tableBody}
          ignoreData={tableContent[activeTableName].ignoredData}
          dragable={tableContent[activeTableName].dragable}
          dragStart={
            tableContent[activeTableName].dragable ? onDragStart : null
          }
        />
      )}

      {!!activeTableName && tableContent[activeTableName].dragable && (
        <DroppableIcon
          icon='fa fa-trash'
          onConfirm={onItemRemove}
          onDropClass={classes.onDrop}
          onConfirmText='Are you Sure you want to Delete?'
        />
      )}
    </DashboardCard>
  );
};

export default Archives;
