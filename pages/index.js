import { rehydrate } from 'glamor';

import { Container, Row, Col, WrappedRow } from './../components/Grid/';
import Header from './../components/Header/';
import Nav from './../components/Nav/';
import Title from './../components/Title/';
import Layout from './../layout/';
import Wrapper from './../layout/Wrapper';
import Content from './../layout/Content';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids);
}

console.log(Title);

export default () =>
  <Layout>
    <Header backgroundImage="url(/static/desk.jpg)">
      <Container>
        <Row>
          <Nav />
        </Row>
      </Container>
    </Header>

    <Wrapper>
      <Container>
        <Content>
          <Title>Test</Title>
          <Row>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
          </Row>

          <Title swap>Skills</Title>
          <Row>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
          </Row>

          <Title swap>Skills</Title>
          <Row>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
          </Row>

          <Title swap>Skills</Title>
          <Row>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
          </Row>

          <Title swap>Skills</Title>
          <Row>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
            <Col flex="3">
              <p>Some content</p>
            </Col>
            <Col>
              <p>Some content</p>
            </Col>
          </Row>
        </Content>
      </Container>
    </Wrapper>
  </Layout>;
