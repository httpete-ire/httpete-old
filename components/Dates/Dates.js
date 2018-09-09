import styled from 'react-emotion';

const Date = styled('p')({
  color: '#bdbcbc',
  marginTop: 5,
  fontSize: '0.875em',
});

export default ({ from, to }) => (
  <Date>
    {from} - {to}
  </Date>
);
