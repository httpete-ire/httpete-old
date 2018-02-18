import { rehydrate } from 'glamor';

import { Container, Row, Col, WrappedRow } from './../components/Grid/';
import Header from './../components/Header/';
import Nav from './../components/Nav/';
import Logo from './../components/Nav/Logo';
import Title from './../components/Title/';
import Browser from './../components/Browser';
import Projects from './../components/Projects';
import Layout from './../layout/';
import Wrapper from './../layout/Wrapper';
import Content from './../layout/Content';
import Section from './../layout/Section';
import Footer from './../layout/Footer';

import { projects, projectsById } from './../Data/';

console.log(projectsById);

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids);
}

export default () => (
  <Layout>
    <Header backgroundImage="url(/static/desk.jpg)">
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
            <h1>Coming soon...</h1>
            <Title inViewColor="#ddd">About</Title>
            <Row>
              <Col flex="3">
                <p>About content</p>
              </Col>
              <Col>
                <p>Details</p>
              </Col>
            </Row>
          </Section>

          <Section>
            <Title swap>Skills</Title>
            <Row>
              <WrappedRow />
              <WrappedRow>
                <p>SVG icon</p>
              </WrappedRow>
            </Row>
          </Section>

          <Section marginBottom={0}>
            <Title>Work</Title>
            <Projects projects={projects} />
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
);
