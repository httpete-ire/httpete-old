import glamorous from 'glamorous';

const Institute = glamorous.h5({
  fontSize: '1.125em',
  fontWeight: 600,
  marginBottom: 5,
  lineHeight: 1.5,
});

const Course = glamorous.p({
  lineHeight: 1.5,
});

const Dates = glamorous.p({
  color: '#bdbcbc',
  marginTop: 5,
});

export default ({ institute, course, from, to }) => (
  <div>
    <Institute>{institute}</Institute>
    <Course>{course}</Course>
    <Dates>
      {from} - {to}
    </Dates>
  </div>
);
