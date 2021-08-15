import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';

import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/header/Header';
import ContentContainer from 'components/container/ContentContainer';
import Main from 'components/main/Main';

interface TemplateProps {
  children: ReactNode;
}

const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>
        <ContentContainer>{children}</ContentContainer>
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
  padding: 0 70px;
  box-sizing: border-box;
`;

export default Template;
