import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { Main } from '../src/components/layout/Main';

const Home: NextPage = () => {
  return (
    <Main>
      <>
        <Main.HeaderBar>
          <>
            <Main.Button variant="text">로고</Main.Button>
            <NavWrapper>
              <Main.Button variant="text">메인</Main.Button>
              <Main.Button variant="text">갤러리</Main.Button>
              <Main.Button variant="text">마이페이지</Main.Button>
            </NavWrapper>
          </>
        </Main.HeaderBar>
        <Grid>
          <CardWrapper>
            <Main.Card width={400} height={315} />
            <Main.Card width={400} height={315} />
            <Main.Card width={400} height={315} />
          </CardWrapper>
        </Grid>
      </>
    </Main>
  );
};

export default Home;

const Grid = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
