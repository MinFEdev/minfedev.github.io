import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import ScreenOut from 'components/screenOut/ScreenOut';

const Header: FunctionComponent = () => {
  return (
    <HeaderStyle>
      <HomeLink>
        <Link to="/">MC</Link>
      </HomeLink>

      <HomeNavList>
        <HomeNavItem>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <ScreenOut label="Home" />
          </Link>
        </HomeNavItem>
        <HomeNavItem>
          <Link to="/">
            <FontAwesomeIcon icon={faStickyNote} />
            <ScreenOut label="POST" />
          </Link>
        </HomeNavItem>
      </HomeNavList>
      <AboutLinkList>
        <AboutLinkItem>
          <a href="#none">
            <FontAwesomeIcon icon={faGithub} />
            <ScreenOut label="Github" />
          </a>
        </AboutLinkItem>
      </AboutLinkList>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70px;
  height: 100%;
  padding: 1em;
  background-color: rgb(24, 24, 24);
  box-sizing: border-box;
`;

const HomeLink = styled.h1`
  text-align: center;
  > a {
    display: block;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
  }
`;

const HomeNavList = styled.nav``;
const HomeNavItem = styled.li`
  font-size: 16px;
  text-align: center;

  & + & {
    margin-top: 20px;
  }
`;

const AboutLinkList = styled.ul`
  position: relative;
  width: 100%;
`;
const AboutLinkItem = styled.li`
  font-size: 16px;
  text-align: center;
`;

export default Header;
