import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons';
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
          <Link to="/about">
            <FontAwesomeIcon icon={faAddressCard} />
            <ScreenOut label="About" />
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
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70px;
  height: 100%;
  padding: 1em;
  background-color: rgb(24, 24, 24);
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
  }
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

const HomeNavList = styled.nav`
  @media (max-width: 768px) {
    display: flex;
  }
`;
const HomeNavItem = styled.li`
  font-size: 16px;
  text-align: center;

  & + & {
    margin-top: 40px;

    @media (max-width: 768px) {
      margin-top: 0;
      margin-left: 20px;
    }
  }
`;

const AboutLinkList = styled.ul`
  position: relative;
`;
const AboutLinkItem = styled.li`
  font-size: 16px;
  text-align: center;
`;

export default Header;
