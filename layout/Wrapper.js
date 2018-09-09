import styled from 'react-emotion';

const styles = {
  background: '#fafafa',
  width: '100%',
  transform: 'translateY(0)',
  marginTop: 0,
  transition: 'margin-top 1.5s cubic-bezier(0.62, 0.07, 0.36, 1)',
  '.loaded &': {
    marginTop: '-15vh',
  },
};

export default styled('section')(styles);
