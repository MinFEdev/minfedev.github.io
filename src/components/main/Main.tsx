import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import ScreenOut from 'components/screenOut/ScreenOut';

interface MainProps {
  isMain?: boolean;
  children: ReactNode;
}

const Main: FunctionComponent<MainProps> = ({ isMain, children }) => {
  return (
    <MainStyle isMain={isMain}>
      <ScreenOut as="h2" label="Mincheol Dev Blog 컨텐츠 본문" />
      {children}
    </MainStyle>
  );
};

const MainStyle = styled.main<{ isMain: boolean | undefined }>`
  position: relative;
  padding: ${({ isMain }) => (isMain ? '50px 0' : '0')};
`;

export default Main;
