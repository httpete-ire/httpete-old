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
      marginLeft: '-214px',
      [mediaQueries.xlarge]: {
        marginLeft: '-107px',
      },
      [mediaQueries.large]: {
        marginLeft: 0,
      },
    });
  }

  if (props.browserSwap) {
    styles.push({
      marginRight: '-212',
      marginLeft: '0',
      [mediaQueries.medium]: {
        marginRight: '0',
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
