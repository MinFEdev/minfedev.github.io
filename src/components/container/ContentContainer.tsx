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
  margin: 0 auto;
`;

export default ContentContainer;
