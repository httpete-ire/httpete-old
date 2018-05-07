import { Fragment } from 'react';
import glamorous from 'glamorous';
import BrowserHeader from './BrowserHeader';
import BrowserBody from './BrowserBody';

const styles = {
  marginTop: 0,
  transition: 'margin-top 1.5s cubic-bezier(0.62, 0.07, 0.36, 1)',
  '.loaded &': {
    marginTop: '-15vh',
  },
};

const MainBrowser = glamorous.div(styles);

export default ({ image, main = false }) =>
  main ? (
    <MainBrowser>
      <BrowserHeader />
      <BrowserBody image={image} />
    </MainBrowser>
  ) : (
    <Fragment>
      <BrowserHeader />
      <BrowserBody image={image} />
    </Fragment>
  );
