import React, {useEffect} from "react";
import { Button, TextField } from "@mui/material";
import styled from "styled-components"
import { HeaderBar } from "../../common/HeaderBar"
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export type message = {
    nickname: string;
    content: string;
  };
  
  let sockJS = new SockJS("http://localhost:8080/webSocket");
  let stompClient : Stomp.Client = Stomp.over(sockJS);
  stompClient.debug= () => {};

const ChattingRoom = () => {

    const [contents, setContents] = React.useState<string>('날다람쥐가 왔다');
    const [nickname, setNickname] = React.useState('날다람쥐');
    const [message, setMessage] = React.useState("");
  
    useEffect(()=>{
      stompClient.connect({},()=>{
        stompClient.subscribe('/api/chat/room',(data)=>{
          const newMessage : message = JSON.parse(data.body) as message;
          console.log(newMessage)
        //   addMessage(newMessage);
        });
    });
    },[contents]);
    
    const handleEnter = (nickname: string, content: string) => {
      const newMessage: message = { nickname, content };
      stompClient.send("/api/chat/message",{},JSON.stringify(newMessage));
      setMessage("");
    };

    // const addMessage = (message : message) =>{
    //     setContents(prev=>[...prev, message]);
    //   };
  

    return (
    <>
    <HeaderBar>
        <Button variant="text" >로고</Button>
    </HeaderBar>
        <Grid>
            <Empty/>
            <TextFieldWrapper>
                <h2>회의 주제</h2>
                <TextField id="outlined-basic" label="주제를 입력해주세요" variant="outlined" onChange={e => setContents(e.target.value)} />
            </TextFieldWrapper>
            <Button variant="contained" onClick={() => handleEnter(nickname, contents)} >완료</Button>
        </Grid> 
    </>
    )
}

const Grid = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding : 50px 0px;
`

const TextFieldWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`

const Empty = styled.div`

`

export  { ChattingRoom }