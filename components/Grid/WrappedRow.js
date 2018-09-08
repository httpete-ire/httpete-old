import styled from 'react-emotion';
import { mediaQueries } from './../../config';
import { styles as rowStyles } from './Row';

const styles = {
  [mediaQueries.small]: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
};

export default styled('div')({ ...rowStyles, ...styles });
