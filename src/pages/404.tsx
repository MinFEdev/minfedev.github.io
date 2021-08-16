import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'styles/GlobalStyle';
import { Link } from 'gatsby';

const NotFoundPage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NotFoundPageStyle>
        <NotFoundTitle>존재하지 않는 페이지입니다.</NotFoundTitle>
        <NotFoundText>다른 콘텐츠로 이동하시겠습니까?</NotFoundText>
        <GoToMain to="/">메인으로 이동</GoToMain>
      </NotFoundPageStyle>
    </React.Fragment>
  );
};

const NotFoundPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFoundTitle = styled.h2`
  font-weight: bold;
  font-size: 3rem;
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
`;

const GoToMain = styled(Link)`
  display: block;
  margin-top: 2rem;
  padding-bottom: 5px;
  font-size: 1.2rem;
`;

export default NotFoundPage;
