import styled from 'react-emotion';

const styles = {
  overflow: 'hidden',
  borderRadius: '0 0 5px 5px',
  border: '2px solid #cccccc',
  borderTop: 'none',
  fontSize: 0,
};

const BrowserHeader = styled('div')(styles);

export default ({ image }) => (
  <BrowserHeader>
    <img src={image} />
  </BrowserHeader>
);
