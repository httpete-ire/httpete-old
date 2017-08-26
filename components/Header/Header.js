import glamorous from 'glamorous';

const styles = {
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '25px 0',
};

const Header = glamorous.header(styles);

Header.propsAreCssOverrides = true;

export default Header;
