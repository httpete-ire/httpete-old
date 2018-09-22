import Document, { Head, Main, NextScript } from 'next/document';

import { extractCritical } from 'emotion-server';
import { injectGlobal } from 'emotion';

import PageViewTracking from './../components/PageViewTracking/';

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
    src: url(/static/atcharris-regular-webfont.eot),
          url(/static/atcharris-regular-webfont.eot?#iefix) format('embedded-opentype'),
          url(/static/atcharris-regular-webfont.woff2) format('woff2'),
          url(/static/atcharris-regular-webfont.woff) format('woff'),
          url(/static/atcharris-regular-webfont.ttf) format('truetype'),
          url(https://httpete.com/static/atcharris-regular-webfont.svg#atc_harrisbold) format('svg');
  }

  body {
    font-family: 'atcharris-regular';
  }
  
`;

const GA_TRACKING_ID = 'UA-125400257-1';

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
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <meta name="viewport" content="width=device-width" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(x,y,z){(x[y]&&x[y](z))||z()})(window,'requestIdleCallback',function(){
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                ga('create', '${GA_TRACKING_ID}', 'auto');
                ga('send', 'pageview');
                });
                      `,
            }}
          />

          <title>httpete.com</title>
        </Head>
        <body
          className={this.state.loaded ? 'loaded' : ''}
          style={{ background: '#fafafa' }}
        >
          <PageViewTracking>
            <Main />
          </PageViewTracking>
          <NextScript />
        </body>
      </html>
    );
  }
}
