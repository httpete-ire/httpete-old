import glamorous from 'glamorous';

const styles = {
  position: 'absolute',
  display: 'inline-block',
  padding: '0',
  listStyle: 'none',
  display: 'none',
  paddingTop: 10,
};

export default glamorous.ul(styles);

const DropdownItem = glamorous.li({
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

const DropdownContainer = glamorous.li({
  ':hover .dropdown': {
    display: 'block',
  },
});

export { DropdownItem, DropdownContainer };
