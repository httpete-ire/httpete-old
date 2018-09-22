import { Col } from './../Grid';
import Browser from './../Browser';

export default ({ image, rightAligned, alt, svg }) => (
  <Col browser={!rightAligned} browserSwap={rightAligned}>
    <Browser image={image} alt={alt} svg={svg} />
  </Col>
);
