import { projectsById } from './../Data/';
import { Container, Row, Col, WrappedRow } from './../components/Grid/';
import Header from './../components/Header/';
import Nav from './../components/Nav/';
import Logo from './../components/Nav/Logo';
import Title from './../components/Title/';
import Browser from './../components/Browser';
import Projects from './../components/Projects';
import Svg from './../components/Svg';
import ContactDetails from './../components/ContactDetails';
import MainTitle from './../components/MainTitle/';
import { OutlineButton, DefaultButton } from './../components/Buttons/';
import PageViewTracking from './../components/PageViewTracking/';

import ErrorPage from './_error';

import Layout from './../layout/';
import Wrapper from './../layout/Wrapper';
import Content from './../layout/Content';
import Section from './../layout/Section';
import Footer from './../layout/Footer';

import { iconMap } from './../icons/';

export default class ProjectsPage extends React.Component {
  static async getInitialProps({ query: { name }, res }) {
    const project = projectsById[name] || null;
    if (!project && res) res.statusCode = 404;
    return { project };
  }

  render() {
    const { project } = this.props;

    if (!project) {
      return <ErrorPage />;
    }

    return (
      <PageViewTracking>
        <Layout>
          <Header backgroundImage="url(/static/desk.webp)">
            <Container>
              <Row>
                <Nav />
              </Row>
              <Row>
                <MainTitle>{project.title}</MainTitle>
              </Row>
            </Container>
          </Header>

          <Wrapper>
            <Container backgroundColor="#ffffff">
              <Content>
                <Section marginBottom="74">
                  <Row>
                    <Col>
                      <Browser
                        image={project.mainImage.src}
                        svg={project.mainImage.svg}
                        main
                      />
                    </Col>
                  </Row>
                </Section>

                <Section>
                  <Title>Description</Title>
                  <Row>
                    <Col>
                      <p>
                        <b>{project.projectDesc}</b>
                      </p>
                    </Col>
                    <Col>
                      <p style={{ whiteSpace: 'pre-line' }}>
                        {project.sideDesc}
                      </p>
                    </Col>
                  </Row>
                </Section>

                <Section>
                  <Title swap>Technologies</Title>
                  <Row>
                    <WrappedRow>
                      {project.technologies.map(tech => (
                        <Svg key={tech} markup={iconMap[tech]} />
                      ))}
                    </WrappedRow>
                  </Row>
                </Section>

                <Section>
                  <Title>Project overview</Title>
                  <Projects projects={project.screens} />
                </Section>

                <Section last>
                  <Row>
                    <Col />

                    {project.applicationLink && (
                      <Col>
                        <DefaultButton
                          href={project.applicationLink}
                          target="_blank"
                          margin="0 0 30px 0"
                        >
                          View application
                        </DefaultButton>
                      </Col>
                    )}

                    {project.sourceCodeLink && (
                      <Col>
                        <OutlineButton
                          href={project.sourceCodeLink}
                          target="_blank"
                        >
                          Source code
                        </OutlineButton>
                      </Col>
                    )}

                    <Col />
                  </Row>
                </Section>
              </Content>
            </Container>
          </Wrapper>

          <Footer>
            <Container>
              <Col>
                <Logo />
              </Col>
            </Container>
          </Footer>
        </Layout>
      </PageViewTracking>
    );
  }
}
