import BrowserHeader from './BrowserHeader';
import BrowserBody from './BrowserBody';

export default ({ image }) => (
  <div>
    <BrowserHeader />
    <BrowserBody image={image} />
  </div>
);
