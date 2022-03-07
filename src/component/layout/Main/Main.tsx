import React from "react";
import { Card, NavWrapper } from "./components"
import { HeaderBar } from "../../common/HeaderBar"
import { Button } from "@mui/material";

type MainType = {
    children : React.ReactChild
}

const Main = ({children}: MainType) => {
    return <div>{children}</div>
}

Main.Card = Card
Main.HeaderBar = HeaderBar
Main.NavWrapper = NavWrapper
Main.Button = Button 

export  { Main }