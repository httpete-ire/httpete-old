import { Col } from './../Grid';
import ProjectTitle from './ProjectTitle';

export default ({ title, mainDesc }) => (
  <Col projectDesc>
    <ProjectTitle>{title}</ProjectTitle>
    <p>{mainDesc}</p>
  </Col>
);
