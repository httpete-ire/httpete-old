import styled from 'react-emotion';
import Link from 'next/link';

const H4 = styled('h4')({
  fontSize: '1.414em',
  color: '#fff',
  display: 'inline-block',
  cursor: 'pointer',
  margin: 0,
  ':hover .Delimiter': {
    opacity: 0,
    width: 0,
  },
});

const Delimiter = styled('span')({
  opacity: 1,
  position: 'relative',
  top: '5px',
  fontSize: '20px',
  overflow: 'hidden',
  display: 'inline-block',
  transition: 'all 0.4s',
  width: '38px',
  color: '#b4b4b4',
});

const Dashes = styled('span')({
  top: 1,
  position: 'relative',
});

const Logo = () => {
  return (
    <Link href="/">
      <a href="/">
        <H4>
          http
          <Delimiter className="Delimiter">
            :<Dashes>//</Dashes>
          </Delimiter>
          ete
        </H4>
      </a>
    </Link>
  );
};

export default Logo;
