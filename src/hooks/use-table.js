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
  return initialState;
};

const UseTable = () => {
  const [tableState, dispatch] = useReducer(tableStateReducer, initialState);

  const onChangeTableData = (tableData, tableName) => {
    dispatch({ type: 'CHANGE_TABLE', tableData, tableName });
  };

  return {
    tableData: tableState.data,
    activeTableName: tableState.activeTableName,
    onChangeTableData,
  };
};

export default UseTable;
