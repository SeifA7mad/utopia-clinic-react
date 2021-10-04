import classes from './Table.module.css';

const Table = ({tableContent}) => {
    const tableHead = <tr> {tableContent.map((key) => <th> </th>)} </tr>;
    return (
        <table>
            
        </table>
    )
}

export default Table
