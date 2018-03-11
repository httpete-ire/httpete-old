import glamorous from 'glamorous';

const Date = glamorous.p({
  color: '#bdbcbc',
  marginTop: 5,
  fontSize: '0.875em',
});

export default ({ from, to }) => (
  <Date>
    {from} - {to}
  </Date>
);
