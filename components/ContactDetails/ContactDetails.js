import glamorous from 'glamorous';

const ContactList = glamorous.ul({
  listStyle: 'none',
  margin: 0,
});

const ContactItem = glamorous.li({
  marginBottom: 20,
});

const ContactLink = glamorous.a({
  padding: '5px 7px',
  marginLeft: 25,
  borderBottom: '1px dashed #57CC88',
  color: '#333',
  '&:hover': {
    color: '#57CC88',
  },
});

export default () => (
  <ContactList>
    <ContactItem>
      <ContactLink href="mailto:pete@httpete.com" target="_blank">
        pete@httpete.com
      </ContactLink>
    </ContactItem>
    <ContactItem>
      <ContactLink href="https://twitter.com/_httpete_" target="_blank">
        Twitter
      </ContactLink>
    </ContactItem>
    <ContactItem>
      <ContactLink href="https://github.com/httpete-ire" target="_blank">
        Github
      </ContactLink>
    </ContactItem>
    <ContactItem>
      <ContactLink
        href="https://www.linkedin.com/in/pete-redmond-367405114/"
        target="_blank"
      >
        Linkedin
      </ContactLink>
    </ContactItem>
  </ContactList>
);
