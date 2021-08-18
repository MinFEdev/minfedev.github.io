import styled from '@emotion/styled';
import React, { FunctionComponent, ReactNode } from 'react';

interface ContentContainerProps {
  isMain: boolean;
  children: ReactNode;
}

const ContentContainer: FunctionComponent<ContentContainerProps> = ({
  isMain,
  children,
}) => {
  return (
    <ContentContainerStyle isMain={isMain}>{children}</ContentContainerStyle>
  );
};

const ContentContainerStyle = styled.div<{ isMain: boolean | undefined }>`
  ${({ isMain }) => isMain && 'max-width: 768px'};
  margin: 0 auto;
`;

export default ContentContainer;
