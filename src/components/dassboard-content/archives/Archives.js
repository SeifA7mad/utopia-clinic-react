import UseTable from '../../../hooks/use-table';
import DashboardCard from '../../../ui/card/dashboard-card/DashboardCard';
import Table from '../../../ui/table/Table';
import Button from '../../../ui/form-content/button/Button';

import { dummyUserData, offersData } from '../../../store/dummy-data';

import classes from './Archives.module.css';
import IconText from '../../../ui/icons/IconText';

const Archives = () => {
  const { tableData, activeTableName, onChangeTableData, onDeleteTableData } =
    UseTable();

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

  const onDragStart = (event, id) => {
    event.dataTransfer.setData('id', id);
  };

  const onItemRemove = (event) => {
    const idToDelete = event.dataTransfer.getData('id');
    onDeleteTableData(+idToDelete);
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
          dragStart={
            tableContent[activeTableName].dragable ? onDragStart : null
          }
        />
      )}

      {tableContent[activeTableName].dragable && (
        <div
          onDragOver={(event) => {
            event.preventDefault();
          }}
          onDrop={onItemRemove}
        >
          <IconText icon='fa fa-trash fa-3x' />
        </div>
      )}
    </DashboardCard>
  );
};

export default Archives;
