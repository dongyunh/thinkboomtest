import React from 'react';
import styled from 'styled-components';
import { themedPalette } from '../../../theme/styleTheme';

type HeaderBarProps = {
  children: React.ReactChild;
};

const HeaderBar = ({ children }: HeaderBarProps) => {
  return <StyledHeaderBar>{children}</StyledHeaderBar>;
};

const StyledHeaderBar = styled.header`
  width: 100vw;
  height: 80px;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
`;
export { HeaderBar };
