import React, {useState} from 'react'
import type { NextPage } from 'next'
import styled from "styled-components";
import Button from '@mui/material/Button';

const Home: NextPage = () => {

  return (
    <>
      <HeaderBar>
        <Button variant="text" >로고</Button>
        <NavWrapper>
          <Button variant="text">메인</Button>
          <Button variant="text">갤러리</Button>
          <Button variant="text">마이페이지</Button>
        </NavWrapper>
      </HeaderBar>
      <Grid>
        <CardWrapper>
          <Card/>
          <Card/>
          <Card/>
        </CardWrapper>
      </Grid>
  </>
  )
}

export default Home

const Grid = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const HeaderBar = styled.header`
width:100vw;
height: 80px;
box-shadow: 0 10px 10px -15px black;
display:flex;
justify-content: space-between;
padding-left: 50px;
position: fixed;
background-color: white;
`

const NavWrapper = styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
width: 30%;
`

const CardWrapper = styled.div`
display: flex;
align-items: center;
gap:50px
`

const Card = styled.section`
height: 315px;
width: 400px;
border-radius: 10%;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
:hover{
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
`
