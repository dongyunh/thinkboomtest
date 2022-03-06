import React from "react";
import styled from "styled-components"

type NavWrapperProps = {
    children : React.ReactChild
}

const NavWrapper = ({children} : NavWrapperProps) => {
    return <StyledNavWrapper>{children}</StyledNavWrapper>
}

const StyledNavWrapper = styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
width: 30%;
`
export  { NavWrapper }