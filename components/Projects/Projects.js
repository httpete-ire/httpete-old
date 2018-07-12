import ProjectImage from './ProjectImage';
import ProjectDesc from './ProjectDesc';
import Section from './../../layout/Section';
import { Row } from './../Grid';

export default ({ projects, showLinks = false }) =>
  projects.filter(({ hide }) => !hide).map((project, index, array) => (
    <Section key={project.id} last={array.length - 1 === index}>
      <Row>
        {index % 2 === 0
          ? [
              <ProjectImage
                key={`${project.id}-image`}
                image={project.mainImage}
                rightAligned={false}
              />,
              <ProjectDesc
                key={`${project.id}-desc`}
                title={project.title}
                mainDesc={project.mainDesc}
                showLink={showLinks}
                push
              />,
            ]
          : [
              <ProjectDesc
                key={`${project.id}-desc`}
                title={project.title}
                mainDesc={project.mainDesc}
                showLink={showLinks}
                push={false}
              />,
              <ProjectImage
                key={`${project.id}-image`}
                image={project.mainImage}
                rightAligned={true}
              />,
            ]}
      </Row>
    </Section>
  ));
