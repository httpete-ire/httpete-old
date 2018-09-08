import styled from 'react-emotion';
import { mediaQueries } from './../../config';

const styles = {
  flex: 1,
  padding: '0 20px',
  [mediaQueries.small]: {
    padding: 0,
  },
};

const Col = styled('div')(styles, props => {
  let styles = [];

  if (props.browser) {
    styles.push({
      marginLeft: '-214',
      [mediaQueries.xlarge]: {
        marginLeft: '-107',
      },
      [mediaQueries.large]: {
        marginLeft: 0,
      },
    });
  }

  if (props.browserSwap) {
    styles.push({
      marginRight: '-214',
      [mediaQueries.xlarge]: {
        marginRight: '-107',
      },
      [mediaQueries.large]: {
        marginRight: 0,
      },
    });
  }

  if (props.projectDesc) {
    styles.push({
      flex: '0 0 48%',
      alignSelf: 'center',
    });
  }

  if (props.flex) {
    styles.push({
      flex: props.flex,
    });
  }

  if (props.marginBottom) {
    styles.push({
      marginBottom: props.marginBottom,
    });
  }

  return styles;
});

export default Col;
