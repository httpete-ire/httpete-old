import glamorous from 'glamorous';

const styles = {
  maxWidth: '1100px',
  margin: '0 auto',
};

const Container = glamorous.div(styles);

Container.propsAreCssOverrides = true;

export default Container;
