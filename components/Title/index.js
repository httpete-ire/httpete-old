import styled from 'react-emotion';
import { Row, Col } from './../Grid/';
import InView from './../InView/';
import { mediaQueries } from './../../config';

const Title = styled('h4')(
  {
    display: 'inline-block',
    minWidth: 210,
    marginTop: 10,
    marginBottom: 20,
    transition: 'all 0.5s',
    borderBottom: '3px solid #ddd',
    fontSize: '1.414em',
    lineHeight: 1.2,
    transition: 'all 1.5s',
    [mediaQueries.small]: {
      width: '100%',
      textAlign: 'left',
    },
  },
  props => {
    const styles = {};

    if (props.color) {
      styles.color = props.color;
    }

    return styles;
  }
);

const margin = 214;

Title.propsAreCssOverrides = true;

const TitleRow = styled('div')(
  {
    display: 'flex',
    width: '100%',
    [mediaQueries.small]: {
      flexDirection: 'column',
    },
  },
  ({ swap }) => ({
    marginLeft: !swap ? '-214px' : '214px',
    textAlign: !swap ? 'left' : 'right',
    [mediaQueries.xlarge]: {
      marginLeft: !swap ? '-107px' : '107px',
    },
    [mediaQueries.large]: {
      marginLeft: 0,
    },
  })
);

export default ({ children, swap, inViewColor = '#333', color = '#000' }) => (
  <InView>
    {({ isInView }) => {
      return (
        <TitleRow swap={swap}>
          <Col textAlign={swap ? 'right' : 'left'}>
            <Title color={isInView ? inViewColor : color}>{children}</Title>
          </Col>
        </TitleRow>
      );
    }}
  </InView>
);
