import ProjectImage from './ProjectImage';
import ProjectDesc from './ProjectDesc';
import Section from './../../layout/Section';
import { Row } from './../Grid';

export default ({ projects, showLinks = false }) =>
  projects.filter(({ hide }) => !hide).map((project, index, array) => (
    <Section key={project.title} last={array.length - 1 === index}>
      <Row>
        {index % 2 === 0
          ? [
              <ProjectImage
                key={`${project.title}-image`}
                image={project.mainImage.src}
                rightAligned={false}
                alt={project.mainImage.alt}
                svg={project.mainImage.svg}
              />,
              <ProjectDesc
                key={`${project.title}-desc`}
                title={project.title}
                mainDesc={project.mainDesc}
                showLink={showLinks}
                push
              />,
            ]
          : [
              <ProjectDesc
                key={`${project.title}-desc`}
                title={project.title}
                mainDesc={project.mainDesc}
                showLink={showLinks}
                push={false}
              />,
              <ProjectImage
                key={`${project.title}-image`}
                image={project.mainImage.src}
                alt={project.mainImage.alt}
                svg={project.mainImage.svg}
                rightAligned={true}
              />,
            ]}
      </Row>
    </Section>
  ));
