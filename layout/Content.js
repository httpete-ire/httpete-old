import styled from 'react-emotion';
import { mediaQueries } from './../config';

const styles = {
  background: '#ffffff',
  padding: '0 60px',
  transform: 'translateY(0)',
  transition: 'transform 1.5s cubic-bezier(0.62, 0.07, 0.36, 1)',
  '.loaded &': {
    transform: 'translateY(-15vh)',
  },
  [mediaQueries.small]: {
    padding: '50px 30px 0 30px',
  },
};

export default styled('section')(styles);
