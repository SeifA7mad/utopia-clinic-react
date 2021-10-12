import Card from '../../ui/card/Card';
import classes from './DiagnosticsTypeCards.module.css';

import { DiagnosticsTypes } from '../../store/dummy-data';

const DiagnosticsCard = ({ img, txt }) => (
  <Card className={classes.diagnosticsCard}>
    <img src={img} alt={txt} />
    <h3> {txt} </h3>
  </Card>
);

const DiagnosticsTypeCards = () => {
    const content = DiagnosticsTypes.map((dType, index) => <DiagnosticsCard key={index} img={dType.img} txt={dType.title} />);
  return <Card className={classes.diagnosticsTypeCard}>{content}</Card>;
};

export default DiagnosticsTypeCards;
