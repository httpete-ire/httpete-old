import { hydrate } from 'react-emotion';

import { Container, Row, Col, WrappedRow } from './../components/Grid/';
import Header from './../components/Header/';
import Nav from './../components/Nav/';
import Logo from './../components/Nav/Logo';
import Title from './../components/Title/';
import Projects from './../components/Projects';
import Svg from './../components/Svg';
import ContactDetails from './../components/ContactDetails';
import Profile from './../components/Profile';
import PageViewTracking from './../components/PageViewTracking/';

import Layout from './../layout/';
import Wrapper from './../layout/Wrapper';
import Content from './../layout/Content';
import Section from './../layout/Section';
import Footer from './../layout/Footer';

import { iconMap } from './../icons/';

import { projects, skills } from './../Data/';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

export default () => (
  <PageViewTracking>
    <Layout>
      <Header backgroundImage="url(/static/desk.webp)">
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
              <Title inViewColor="#ddd" color="#ddd  ">
                About
              </Title>
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

            <Section last>
              <Title>Projects</Title>
              <Projects projects={projects} showLinks />
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
