import glamorous from "glamorous";
import { Col } from "./../Grid/";
import { styles as rowStyles } from "./../Grid/Row";
import Dates from "./../Dates/";
import { mediaQueries } from "./../../config";

const ExperienceRow = glamorous.div(
  {
    ...rowStyles,
    marginBottom: 35,
    paddingTop: 35,
    borderTop: "1px solid #f4f4f4"
  },
  props => {
    const styles = [];

    if (props.first) {
      styles.push({
        paddingTop: 0,
        borderTop: "none"
      });
    }

    if (props.last) {
      styles.push({
        marginBottom: 0
      });
    }

    return styles;
  }
);

ExperienceRow.propsAreCssOverrides = true;

const Company = glamorous.h4({
  fontSize: "1.414em",
  marginBottom: 9
});

const Role = glamorous.h5({
  fontSize: "1.125em",
  fontWeight: 200
});

const FontSmall = glamorous.p({
  fontSize: "0.875em",
  marginBottom: "1.3em"
});

const Text = glamorous.p({
  marginBottom: "1.3em"
});

const ResponsibilityList = glamorous.ul({
  listStyle: "none",
  paddingLeft: "25px"
});

const ResponsibilityItem = glamorous.li({
  position: "relative",
  "&::before": {
    content: " ",
    position: "absolute",
    top: 6,
    left: -20,
    display: "block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#ddd"
  }
});

const ExperienceCol = glamorous.div({
  marginBottom: 0,
  [mediaQueries.medium]: {
    marginBottom: 18
  }
});

export default ({ job, first = false, last = false }) => (
  <ExperienceRow first={first} last={last}>
    <Col>
      <ExperienceCol>
        <Company>{job.company}</Company>
        <Role>{job.role}</Role>
        <Dates from={job.from} to={job.to} />
      </ExperienceCol>
    </Col>

    <Col flex="2">
      <FontSmall>{job.details}</FontSmall>

      <Text>
        <b>My responsibilities included :</b>
      </Text>

      <ResponsibilityList>
        {job.responsibilities.map((responsibility, index) => (
          <ResponsibilityItem key={index}>
            <FontSmall>{responsibility}</FontSmall>
          </ResponsibilityItem>
        ))}
      </ResponsibilityList>
    </Col>
  </ExperienceRow>
);
