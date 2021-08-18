import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';

import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/header/Header';
import ContentContainer from 'components/container/ContentContainer';
import Main from 'components/main/Main';

interface TemplateProps {
  pathname?: string;
  children: ReactNode;
}

const Template: FunctionComponent<TemplateProps> = ({ pathname, children }) => {
  console.log(pathname);
  const isMain = pathname === '/' || pathname === '/about';
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main isMain={isMain}>
        <ContentContainer isMain={isMain}>{children}</ContentContainer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 70px;
  box-sizing: border-box;
`;

export default Template;
