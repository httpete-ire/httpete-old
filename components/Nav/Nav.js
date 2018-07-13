import glamorous from 'glamorous';
import Link from 'next/link';
import Logo from './Logo';
import Dropdown, { DropdownItem, DropdownContainer } from './Dropdown';
import { mediaQueries } from './../../config';
import { projects, projectsById } from './../../Data/';

const Nav = glamorous.nav({
  width: '100%',
});

const MainNav = glamorous.ul({
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
  padding: 0,
  [mediaQueries.small]: {
    padding: '0 30px',
  },
});

MainNav.propsAreCssOverrides = true;

export default () => (
  <Nav>
    <MainNav color="#fff">
      <li className="main-nav__item">
        <Logo />
      </li>

      <li className="main-nav__item main-nav__sub-nav">
        <MainNav width="130px">
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
