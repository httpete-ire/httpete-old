import { Fragment } from 'react';
import glamorous from 'glamorous';
import BrowserHeader from './BrowserHeader';
import BrowserBody from './BrowserBody';
import { mediaQueries } from './../../config';

const MainBrowser = glamorous.div({
  marginTop: 0,
  transition: 'margin-top 1.5s cubic-bezier(0.62, 0.07, 0.36, 1)',
  '.loaded &': {
    marginTop: '-15vh',
  },
});

const Browser = glamorous.div({
  marginBottom: 0,
  [mediaQueries.small]: {
    marginBottom: 24,
  },
});

export default ({ image, main = false }) =>
  main ? (
    <MainBrowser>
      <BrowserHeader />
      <BrowserBody image={image} />
    </MainBrowser>
  ) : (
    <Browser>
      <BrowserHeader />
      <BrowserBody image={image} />
    </Browser>
  );
