import glamorous from 'glamorous';

const styles = {
  flex: 1,
  flexBasis: 110,
  textAlign: 'center',
  '& svg': {
    height: 58,
    transition: 'all 0.5s ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
};

const Svg = glamorous.div(styles);

export default ({ markup }) => (
  <Svg dangerouslySetInnerHTML={{ __html: markup }} />
);
