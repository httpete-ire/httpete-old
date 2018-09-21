import styled from 'react-emotion';
import { mediaQueries } from './../../config';

const btnStyles = {
  display: 'block',
  padding: '12px 20px',
  textAlign: 'center',
  borderRadius: '5px',
  color: '#000',
  [mediaQueries.small]: {
    width: '100%',
  },
};

const OutlineButton = styled('a')({
  ...btnStyles,
  border: '2px solid #dad9d9',
  color: '#dad9d9',
  transition: 'all 0.7s ease',
  '&:hover': {
    border: '2px solid #C0C0C0',
    color: '#9A9A9A',
  },
});

const DefaultButton = styled('a')(
  {
    ...btnStyles,
    padding: '14px 20px',
    background: '#57CC88',
    '&:hover': {
      background: '#3ac072',
    },
  },
  props => {
    const styles = {};

    if (props.margin) {
      styles.margin = props.margin;
    }

    return styles;
  }
);

DefaultButton.propsAreCssOverrides = true;

export { DefaultButton, OutlineButton };
