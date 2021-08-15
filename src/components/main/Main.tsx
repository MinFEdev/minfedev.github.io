import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import ScreenOut from 'components/screenOut/ScreenOut';

interface MainProps {
  children: ReactNode;
}

const Main: FunctionComponent<MainProps> = ({ children }) => {
  return (
    <MainStyle>
      <ScreenOut as="h2" label="Mincheol Dev Blog 컨텐츠 본문" />
      {children}
    </MainStyle>
  );
};

const MainStyle = styled.main`
  position: relative;
`;

export default Main;
