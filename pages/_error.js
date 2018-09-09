import { hydrate } from 'react-emotion';

import { Container, Row, Col, WrappedRow } from './../components/Grid/';
import Header from './../components/Header/';
import Nav from './../components/Nav/';
import Logo from './../components/Nav/Logo';
import ErrorMessage from '../components/ErrorMessage';

import ContactDetails from './../components/ContactDetails';

import Layout from './../layout/';
import Wrapper from './../layout/Wrapper';
import Content from './../layout/Content';
import Section from './../layout/Section';
import Footer from './../layout/Footer';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

export default () => (
  <Layout>
    <Header backgroundImage="url(https://s3.eu-west-2.amazonaws.com/httpete/desk.jpg)">
      <Container>
        <Row>
          <Nav />
        </Row>
      </Container>
    </Header>

    <Wrapper>
      <Container backgroundColor="#ffffff">
        <Content>
          <Section marginBottom="0">
            <Row>
              <Col>
                <ErrorMessage>4💩4</ErrorMessage>
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
);
