import glamorous from 'glamorous';
import Dates from './../Dates/';

const Institute = glamorous.h5({
  fontSize: '1.125em',
  fontWeight: 600,
  marginBottom: 5,
  lineHeight: 1.5,
});

const Course = glamorous.p({
  lineHeight: 1.5,
});

export default ({ institute, course, from, to }) => (
  <div>
    <Institute>{institute}</Institute>
    <Course>{course}</Course>
    <Dates from={from} to={to} />
  </div>
);
