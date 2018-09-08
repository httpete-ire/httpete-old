import styled from 'react-emotion';

const styles = {
  maxWidth: '1100px',
  margin: '0 auto',
};

const Container = styled('div')(styles, props => {
  const styles = {};

  if (props.backgroundColor) {
    styles.backgroundColor = props.backgroundColor;
  }

  return styles;
});

export default Container;
