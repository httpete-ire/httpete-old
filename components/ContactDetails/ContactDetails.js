import styled from 'react-emotion';
import { mediaQueries } from './../../config';

const ContactList = styled('ul')({
  listStyle: 'none',
  margin: 0,
  [mediaQueries.small]: {
    padding: 0,
  },
});

const ContactItem = styled('li')({
  marginBottom: 20,
});

const ContactLink = styled('a')({
  padding: '5px 7px',
  marginLeft: 25,
  borderBottom: '1px dashed #57CC88',
  color: '#333',
  '&:hover': {
    color: '#57CC88',
  },
  [mediaQueries.small]: {
    marginLeft: 0,
  },
});

export default () => (
  <ContactList>
    <ContactItem>
      <ContactLink
        href="mailto:pete@httpete.com"
        target="_blank"
        rel="noopener"
      >
        pete@httpete.com
      </ContactLink>
    </ContactItem>
    <ContactItem>
      <ContactLink
        href="https://twitter.com/_httpete_"
        target="_blank"
        rel="noopener"
      >
        Twitter
      </ContactLink>
    </ContactItem>
    <ContactItem>
      <ContactLink
        href="https://github.com/httpete-ire"
        target="_blank"
        rel="noopener"
      >
        Github
      </ContactLink>
    </ContactItem>
    <ContactItem>
      <ContactLink
        href="https://www.linkedin.com/in/pete-redmond-367405114/"
        target="_blank"
        rel="noopener"
      >
        Linkedin
      </ContactLink>
    </ContactItem>
  </ContactList>
);
