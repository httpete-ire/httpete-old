import glamorous from 'glamorous';
import { Col } from './../Grid/';
import { styles as rowStyles } from './../Grid/Row';
import Dates from './../Dates/';

const ExperienceRow = glamorous.div(
  {
    ...rowStyles,
    marginBottom: 35,
    paddingTop: 35,
    borderTop: '1px solid #f4f4f4',
  },
  props => {
    const styles = [];

    if (props.first) {
      styles.push({
        paddingTop: 0,
        borderTop: 'none',
      });
    }

    if (props.last) {
      styles.push({
        marginBottom: 0,
      });
    }

    return styles;
  }
);

ExperienceRow.propsAreCssOverrides = true;

export default ({ job, first = false, last = false }) => (
  <ExperienceRow first={first} last={last}>
    <Col>
      <h4>{job.company}</h4>
      <h5>{job.role}</h5>
      <Dates from={job.from} to={job.to} />
    </Col>

    <Col flex="2">
      <p>{job.details}</p>

      <b>My responsibilities included :</b>

      <ul>
        {job.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </Col>
  </ExperienceRow>
);
