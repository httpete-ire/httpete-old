import glamorous from 'glamorous';
import { mediaQueries } from './../../config';

const styles = {
  flex: 1,
  padding: '0 20px',
  [mediaQueries.small]: {
    padding: 0,
  },
};

const Col = glamorous.div(styles);

Col.propsAreCssOverrides = true;

export default Col;
