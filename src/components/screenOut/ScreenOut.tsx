import React, { ElementType, FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface ScreenOutProps {
  as?: ElementType | undefined;
  label: string;
}

const ScreenOut: FunctionComponent<ScreenOutProps> = ({ as, label }) => {
  return <ScreenOutStyle as={as}>{label}</ScreenOutStyle>;
};

const ScreenOutStyle = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export default ScreenOut;
