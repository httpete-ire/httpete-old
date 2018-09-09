import styled from 'react-emotion';
import { mediaQueries } from './../../config';

const styles = {
  position: 'absolute',
  display: 'inline-block',
  padding: '0',
  listStyle: 'none',
  display: 'none',
  paddingTop: 10,
};

export default styled('ul')(styles);

const DropdownItem = styled('li')({
  color: '#DDD',
  marginBottom: '8px',
  fontSize: 14,
  '& > a': {
    color: '#DDD',
    transition: 'all 0.5s',
  },
  '&:hover > a': {
    color: '#FFF',
    paddingLeft: '5px',
  },
});

const DropdownContainer = styled('li')({
  marginRight: 50,
  [mediaQueries.small]: {
    marginRight: 25,
  },
  ':hover .dropdown': {
    display: 'block',
  },
});

export { DropdownItem, DropdownContainer };
