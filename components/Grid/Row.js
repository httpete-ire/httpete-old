import glamorous from 'glamorous';
import { mediaQueries } from './../../config';

export const styles = {
  display: 'flex',
  width: '100%',
  [mediaQueries.small]: {
    flexDirection: 'column',
  },
};

const Row = glamorous.div(styles);

Row.propsAreCssOverrides = true;

export default Row;
