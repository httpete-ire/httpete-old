import ProjectImage from './ProjectImage';
import ProjectDesc from './ProjectDesc';
import Section from './../../layout/Section';
import { Row } from './../Grid';

export default ({ projects, showLinks = false }) => (
  <div>
    {projects.map((project, index) => (
      <Section
        marginBottom={projects.length - 1 === index ? 0 : 120}
        key={project.id}
      >
        <Row>
          {index % 2 === 0
            ? [
                <ProjectImage image={project.mainImage} rightAligned={false} />,
                <ProjectDesc
                  title={project.title}
                  mainDesc={project.mainDesc}
                  showLink={showLinks}
                  push
                />,
              ]
            : [
                <ProjectDesc
                  title={project.title}
                  mainDesc={project.mainDesc}
                  showLink={showLinks}
                  push={false}
                />,
                <ProjectImage image={project.mainImage} rightAligned={true} />,
              ]}
        </Row>
      </Section>
    ))}
  </div>
);
