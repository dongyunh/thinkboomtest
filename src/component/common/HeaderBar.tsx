import React from 'react';
import styled from 'styled-components';

type HeaderBarProps = {
  children: React.ReactChild;
};

const HeaderBar = ({ children }: HeaderBarProps) => {
  return <StyledHeaderBar>{children}</StyledHeaderBar>;
};

const StyledHeaderBar = styled.header`
  width: 100vw;
  height: 80px;
  box-shadow: 0 10px 10px -15px black;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  position: fixed;
  background-color: white;
`;
export { HeaderBar };
