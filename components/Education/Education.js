import glamorous from 'glamorous';
import Dates from './../Dates/';
import { mediaQueries } from './../../config';

const Institute = glamorous.h5({
  fontSize: '1.125em',
  fontWeight: 600,
  marginBottom: 5,
  lineHeight: 1.5,
});

const Course = glamorous.p({
  lineHeight: 1.5,
});

const Education = glamorous.div({
  marginBottom: 0,
  [mediaQueries.small]: {
    marginBottom: 24,
  },
});

const Result = glamorous.p({
  marginTop: '6px',
  fontWeight: 'bold',
});

export default ({ institute, course, from, to, result }) => (
  <Education>
    <Institute>{institute}</Institute>
    <Course>{course}</Course>
    <Dates from={from} to={to} />

    {result && <Result>{result}</Result>}
  </Education>
);
