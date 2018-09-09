import styled from 'react-emotion';

const styles = {
  width: '100%',
  padding: '5px 10px',
  background: '#cccccc',
  display: 'block',
  borderRadius: '5px 5px 0 0',
};

const BrowserHeader = styled('div')(styles);

const BrowserButton = styled('span')({
  width: '12px',
  height: '12px',
  display: 'inline-block',
  borderRadius: '50%',
  marginRight: 6,
});

BrowserButton.propsAreCssOverrides = true;

export default () => (
  <BrowserHeader>
    <BrowserButton background="#e06b5e" />
    <BrowserButton background="#e8c63b" />
    <BrowserButton background="#57CC88" />
  </BrowserHeader>
);
