import styled from 'react-emotion';
import { mediaQueries } from './../../config';

const styles = {
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: '1px solid #f4f4f4',
  maxWidth: 280,
  fontSize: '1.125em',
  [mediaQueries.small]: {
    paddingBottom: 10,
    marginBottom: 10,
  },
};

export default styled('h5')(styles);
