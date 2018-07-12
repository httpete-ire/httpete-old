import glamorous from 'glamorous';
import { mediaQueries } from './../config';

const styles = {
  marginBottom: 100,
  [mediaQueries.small]: {
    marginBottom: '40px !important',
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

const Section = glamorous.section(styles, styleProps);

Section.propsAreCssOverrides = true;

export default Section;
