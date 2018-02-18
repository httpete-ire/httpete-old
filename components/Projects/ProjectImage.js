import { Col } from './../Grid';
import Browser from './../Browser';

export default ({ image, rightAligned }) => (
  <Col browser={!rightAligned} browserSwap={rightAligned}>
    <Browser image={image} />
  </Col>
);
