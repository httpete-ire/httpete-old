import glamorous from 'glamorous';
import { mediaQueries } from './../../config';
import { styles as rowStyles } from './Row';

const styles = {
  [mediaQueries.small]: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
};

export default glamorous.div(rowStyles, styles);
