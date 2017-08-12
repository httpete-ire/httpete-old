import glamorous from 'glamorous';
import { mediaQueries } from './../../config';

export const styles = {
  display: 'flex',
  width: '100%',
  [mediaQueries.small]: {
    flexDirection: 'column',
  },
};

export default glamorous.div(styles);
