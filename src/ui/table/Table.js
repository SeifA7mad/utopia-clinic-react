import classes from './Table.module.css';

const Table = ({ tableHeadData, tableBodyData, ignoreData }) => {
  let tableBody = [];

  if (tableBodyData !== null) {
    // outer loop to loop on the whole map keys
    for (let dataKey in tableBodyData) {
      // inner loop to loop on every key map
      let rowData = [];
      for (let dataValue in tableBodyData[dataKey]) {
        if (!ignoreData.includes(dataValue)) {
          rowData.push(
            <td key={`${dataValue}${dataKey}`}>
              {tableBodyData[dataKey][dataValue]}
            </td>
          );
        }
      }
      tableBody.push(<tr key={dataKey}>{rowData}</tr>);
    }
  }

  const tableHead = tableHeadData.map((head, index) => (
    <th key={index}> {head} </th>
  ));

  return (
    <table className={classes.table}>
      <thead>
        <tr>{tableHead}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};

export default Table;
