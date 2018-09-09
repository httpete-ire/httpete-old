import styled from 'react-emotion';

const ErrorMessage = styled('h1')({
  fontSize: '4rem',
  padding: '20px 0',
  textAlign: 'center',
});

export default ({ children }) => <ErrorMessage>{children}</ErrorMessage>;
