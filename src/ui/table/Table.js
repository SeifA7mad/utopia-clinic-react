import classes from './Table.module.css';

const Table = ({
  tableHeadData,
  tableBodyData,
  ignoreData,
  dragable,
  dragStart,
}) => {
  let tableBody = [];

  if (tableBodyData.length > 0) {
    let rowOfData = null;
    tableBodyData.forEach((dataObj) => {
      rowOfData = [];
      for (let dataKey in dataObj) {
        if (ignoreData && ignoreData.includes(dataKey)) {
          continue;
        }
        rowOfData.push(
          <td key={`${dataObj.id}_${dataObj[dataKey]}`}>{dataObj[dataKey]}</td>
        );
      }
      tableBody.push(
        <tr
          draggable={dragable}
          onDragStart={(e) => dragStart(e, dataObj.id)}
          key={dataObj.id}
        >
          {rowOfData}
        </tr>
      );
    });
  }

  const tableHead = tableHeadData.map((head, index) => (
    <th key={index}> {head} </th>
  ));

  return (
    <table className={classes.table}>
      <thead>
        <tr>{tableHead}</tr>
      </thead>
      <tbody className={dragable ? classes.dragable : null}>{tableBody}</tbody>
    </table>
  );
};

export default Table;
