import glamorous from 'glamorous';
import { mediaQueries } from './../../config';

const styles = {
  flex: 1,
  padding: '0 20px',
  [mediaQueries.small]: {
    padding: 0,
  },
};

const Col = glamorous.div(styles, props => {
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

  return styles;
});

Col.propsAreCssOverrides = true;

export default Col;
