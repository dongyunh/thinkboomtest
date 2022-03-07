import React from "react";
import styled from "styled-components"

const Card = () => {
    return <StyledCard/>
}

const StyledCard = styled.section`
height: 315px;
width: 400px;
border-radius: 10%;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
:hover{
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
`

export  { Card }