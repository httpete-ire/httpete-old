import styled from 'react-emotion';

const styles = {
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '25px 0',
};

const Header = styled('header')(styles, props => {
  const styles = {};

  if (props.backgroundImage) {
    styles.backgroundImage = props.backgroundImage;
  }

  return styles;
});

export default Header;
