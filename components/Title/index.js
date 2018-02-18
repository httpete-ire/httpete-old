import glamorous from 'glamorous';
import { Row, Col } from './../Grid/';
import InView from './../InView/';

const Title = glamorous.h4({
  display: 'inline-block',
  minWidth: 210,
  marginTop: 10,
  marginBottom: 20,
  transition: 'all 0.5s',
  color: '#ddd',
  borderBottom: '3px solid #ddd',
  fontSize: '1.414em',
  lineHeight: 1.2,
  transition: 'all 1.5s',
});

const margin = 214;

Title.propsAreCssOverrides = true;

export default ({ children, swap, inViewColor = '#333' }) =>
  <InView>
    {({ isInView }) => {
      return (
        <Row marginLeft={swap ? margin : -margin}>
          <Col textAlign={swap ? 'right' : 'left'}>
            <Title color={isInView ? inViewColor : '#ddd'}>
              {children}
            </Title>
          </Col>
        </Row>
      );
    }}
  </InView>;
