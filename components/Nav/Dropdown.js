import glamorous from 'glamorous';

const styles = {
  position: 'relative',
  display: 'inline-block',
  padding: '0',
  listStyle: 'none',
  display: 'none',
};

export default glamorous.ul(styles);

const DropdownItem = glamorous.li({
  color: '#DDD',
  marginBottom: '8px',
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
