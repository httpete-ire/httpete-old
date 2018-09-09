import styled from 'react-emotion';
import { mediaQueries } from './../config';

const styles = {
  marginBottom: 100,
  [mediaQueries.small]: {
    marginBottom: '40px',
  },
};

const styleProps = props => {
  const styles = [];

  if (props.last) {
    styles.push({
      marginBottom: 0,
      [mediaQueries.small]: {
        marginBottom: '0 !important',
      },
    });
  }

  return styles;
};

const Section = styled('section')(styles, styleProps);

export default Section;
