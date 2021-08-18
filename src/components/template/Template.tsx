import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import GlobalStyle from 'styles/GlobalStyle';
import Header from 'components/header/Header';
import ContentContainer from 'components/container/ContentContainer';
import Main from 'components/main/Main';

interface TemplateProps {
  title: string;
  description: string;
  url: string;
  image: string;
  pathname?: string;
  children: ReactNode;
}

const Template: FunctionComponent<TemplateProps> = ({
  title,
  description,
  url,
  image,
  pathname,
  children,
}) => {
  console.log(pathname);
  const isMain = pathname === '/' || pathname === '/about';
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="김민철" />
        <meta name="twitter:creator" content="김민철" />
      </Helmet>

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

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export default Template;
