import glamorous from 'glamorous';
import { mediaQueries } from './../config';

const styles = {
  marginBottom: 100,
  [mediaQueries.small]: {
    marginBottom: '40px !important',
  },
};

const Section = glamorous.section(styles);

Section.propsAreCssOverrides = true;

export default Section;
