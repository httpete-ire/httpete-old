import glamorous from 'glamorous';
import { mediaQueries } from './../../config';

const styles = {
  flex: 1,
  flexBasis: 110,
  textAlign: 'center',
  '& svg': {
    height: 58,
    width: 82,
    transition: 'all 0.5s ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  [mediaQueries.small]: {
    marginBottom: '15px',
  },
};

const Svg = glamorous.div(styles);

export default ({ markup }) => (
  <Svg dangerouslySetInnerHTML={{ __html: markup }} />
);
