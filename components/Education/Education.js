import glamorous from "glamorous";
import Dates from "./../Dates/";
import { mediaQueries } from "./../../config";

const Institute = glamorous.h5({
  fontSize: "1.125em",
  fontWeight: 600,
  marginBottom: 5,
  lineHeight: 1.5
});

const Course = glamorous.p({
  lineHeight: 1.5
});

const Education = glamorous.div({
  marginBottom: 0,
  [mediaQueries.small]: {
    marginBottom: 24
  }
});

export default ({ institute, course, from, to }) => (
  <Education>
    <Institute>{institute}</Institute>
    <Course>{course}</Course>
    <Dates from={from} to={to} />
  </Education>
);
