import { useReducer } from 'react';

const initialState = {
  data: null,
  activeTableName: '',
};

const tableStateReducer = (state, action) => {
  if (action.type === 'CHANGE_TABLE') {
    return {
      data: action.tableData,
      activeTableName: action.tableName,
    };
  }
  if (action.type === 'DELETE_DATA') {
    const newTableData = state.data.filter(
      (dataObj) => dataObj.id !== action.id
    );
    return {
      data: newTableData,
      activeTableName: state.activeTableName,
    };
  }
  return initialState;
};

const UseTable = () => {
  const [tableState, dispatch] = useReducer(tableStateReducer, initialState);

  const onChangeTableData = (tableData, tableName) => {
    dispatch({ type: 'CHANGE_TABLE', tableData, tableName });
  };

  const onDeleteTableData = (id) => {
    dispatch({ type: 'DELETE_DATA', id });
  };

  return {
    tableData: tableState.data,
    activeTableName: tableState.activeTableName,
    onChangeTableData,
    onDeleteTableData,
  };
};

export default UseTable;
