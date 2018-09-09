import styled from 'react-emotion';
import Link from 'next/link';
import Logo from './Logo';
import Dropdown, { DropdownItem, DropdownContainer } from './Dropdown';
import { mediaQueries } from './../../config';
import { projects, projectsById } from './../../Data/';

const Nav = styled('nav')({
  width: '100%',
});

const MainNav = styled('ul')(
  {
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    [mediaQueries.small]: {
      padding: '0 30px',
    },
  },
  props => {
    const styles = {};

    if (props.width) {
      styles.width = props.width;
    }

    if (props.padding) {
      styles.padding = `${props.padding} !important`;
    }

    return styles;
  }
);

export default () => (
  <Nav>
    <MainNav>
      <li className="main-nav__item">
        <Logo />
      </li>

      <li className="main-nav__item main-nav__sub-nav">
        <MainNav padding="0">
          <DropdownContainer>
            <h4>Work</h4>
            <Dropdown className="dropdown">
              {projects.filter(({ hide }) => !hide).map(project => (
                <DropdownItem key={project.id}>
                  <Link href={`/projects/${project.id}/`}>
                    <a>{project.title}</a>
                  </Link>
                </DropdownItem>
              ))}
            </Dropdown>
          </DropdownContainer>

          <li>
            <h4>
              <Link href="/cv">
                <a>CV</a>
              </Link>
            </h4>
          </li>
        </MainNav>
      </li>
    </MainNav>
  </Nav>
);
