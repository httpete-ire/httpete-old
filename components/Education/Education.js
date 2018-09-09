import styled from 'react-emotion';
import Dates from './../Dates/';
import { mediaQueries } from './../../config';

const Institute = styled('h5')({
  fontSize: '1.125em',
  fontWeight: 600,
  marginBottom: 5,
  lineHeight: 1.5,
});

const Course = styled('p')({
  lineHeight: 1.5,
});

const Education = styled('div')({
  marginBottom: 0,
  [mediaQueries.small]: {
    marginBottom: 24,
  },
});

const Result = styled('p')({
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
