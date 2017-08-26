import Document, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';
import { css } from 'glamor';
import 'glamor/reset';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
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
    console.log('mount');
    this.setState({
      loaded: true,
    });
  }

  render() {
    css.global('a', { 'text-decoration': 'none', color: '#fff' });

    css.global('*, *:before, *:after', { boxSizing: 'border-box' });

    const family = css.fontFace({
      fontFamily: 'atcharris-regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src:
        "url(/static/atcharris-regular-webfont.eot), url(/static/atcharris-regular-webfont.eot?#iefix) format('embedded-opentype'), url(/static/atcharris-regular-webfont.woff2) format('woff2'), url(/static/atcharris-regular-webfont.woff) format('woff'), url(/static/atcharris-regular-webfont.ttf) format('truetype'), url(/static/atcharris-regular-webfont.svg#atc_harrisbold) format('svg')",
    });

    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body
          className={this.state.loaded ? 'loaded' : ''}
          style={{ fontFamily: family }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}