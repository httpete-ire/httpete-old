import glamorous from 'glamorous';
import { Row, Col } from './../Grid/';
import InView from './../InView/';
import { mediaQueries } from './../../config';

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

const TitleRow = glamorous.div(
  {
    display: 'flex',
    width: '100%',
    [mediaQueries.small]: {
      flexDirection: 'column',
    },
  },
  ({ swap }) => ({
    marginLeft: !swap ? '-214px' : '214px',
    [mediaQueries.xlarge]: {
      marginLeft: !swap ? '-107px' : '107px',
    },
    [mediaQueries.large]: {
      marginLeft: 0,
    },
  })
);

export default ({ children, swap, inViewColor = '#333' }) => (
  <InView>
    {({ isInView }) => {
      return (
        <TitleRow swap={swap}>
          <Col textAlign={swap ? 'right' : 'left'}>
            <Title color={isInView ? inViewColor : '#ddd'}>{children}</Title>
          </Col>
        </TitleRow>
      );
    }}
  </InView>
);
