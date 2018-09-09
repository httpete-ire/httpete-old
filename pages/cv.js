import { hydrate } from 'react-emotion';

import { Container, Row, Col, WrappedRow } from './../components/Grid/';
import Header from './../components/Header/';
import Nav from './../components/Nav/';
import Logo from './../components/Nav/Logo';
import Title from './../components/Title/';
import Svg from './../components/Svg';
import ContactDetails from './../components/ContactDetails';
import Education from './../components/Education';
import Experience from '../components/Experience';
import Profile from './../components/Profile';
import PageViewTracking from './../components/PageViewTracking/';

import Layout from './../layout/';
import Wrapper from './../layout/Wrapper';
import Content from './../layout/Content';
import Section from './../layout/Section';
import Footer from './../layout/Footer';

import { iconMap } from './../icons/';

import { jobs, skills } from './../Data/';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

export default () => (
  <PageViewTracking>
    <Layout>
      <Header backgroundImage="url(/static/desk.jpg)" height="65vh">
        <Container>
          <Row>
            <Nav />
          </Row>
        </Container>
      </Header>

      <Wrapper>
        <Container backgroundColor="#ffffff">
          <Content>
            <Section marginBottom="74">
              <Title inViewColor="#ddd">Profile</Title>
              <Row>
                <Col flex="3" marginBottom="18">
                  <Profile />
                </Col>
                <Col>
                  <ContactDetails />
                </Col>
              </Row>
            </Section>

            <Section>
              <Title swap>Skills</Title>
              <Row>
                <WrappedRow>
                  {skills.map(skill => (
                    <Svg key={skill} markup={iconMap[skill]} />
                  ))}
                </WrappedRow>
              </Row>
            </Section>

            <Section marginBottom="74">
              <Title>Experience</Title>

              {jobs.map((job, index) => (
                <Experience
                  key={job.id}
                  job={job}
                  first={index === 0}
                  last={index === jobs.length - 1}
                />
              ))}
            </Section>

            <Section last>
              <Title swap>Education</Title>
              <Row>
                <Col>
                  <Education
                    institute="Institute of Art, Design and Technology, Dun Laoghaire"
                    course="Bachelor of Science (Honours) in Computing in Multimedia Systems/Web Engineering"
                    from="2012"
                    to="2016"
                    result="First class honours"
                  />
                </Col>

                <Col>
                  <Education
                    institute="Senior College Dun Laoghaire"
                    course="Diploma in Creative Multimedia and Web/App Development"
                    from="2010"
                    to="2012"
                  />
                </Col>
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
