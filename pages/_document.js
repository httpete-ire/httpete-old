import Document, { Head, Main, NextScript } from 'next/document';

import { extractCritical } from 'emotion-server';
import { injectGlobal } from 'emotion';

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 a { 
   text-decoration: none;
   color: #fff;
  }

  img {
    max-width: 100%;
  }

  p {
    line-height: 1.4;
  }

  @font-face {
    font-family: 'atcharris-regular';
    font-style: normal;
    font-weight: normal;
    src: "url(/static/atcharris-regular-webfont.eot), url(/static/atcharris-regular-webfont.eot?#iefix) format('embedded-opentype'), url(/static/atcharris-regular-webfont.woff2) format('woff2'), url(/static/atcharris-regular-webfont.woff) format('woff'), url(/static/atcharris-regular-webfont.ttf) format('truetype'), url(/static/atcharris-regular-webfont.svg#atc_harrisbold) format('svg')";
  }

  html {
    font-family: 'atcharris-regular';
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <meta name="viewport" content="width=device-width" />
        </Head>
        <body
          className={this.state.loaded ? 'loaded' : ''}
          style={{ background: '#fafafa' }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
