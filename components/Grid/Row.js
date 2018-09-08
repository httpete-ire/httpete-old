import styled from 'react-emotion';
import { mediaQueries } from './../../config';

export const styles = {
  display: 'flex',
  width: '100%',
  [mediaQueries.small]: {
    flexDirection: 'column',
  },
};

const Row = styled('div')(styles);

export default Row;
