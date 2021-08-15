import styled from '@emotion/styled';
import React, { FunctionComponent, ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: FunctionComponent<ContentContainerProps> = ({
  children,
}) => {
  return <ContentContainerStyle>{children}</ContentContainerStyle>;
};

const ContentContainerStyle = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export default ContentContainer;
