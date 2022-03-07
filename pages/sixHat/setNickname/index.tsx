import React, {useState} from "react"
import { TextField, Button } from "@mui/material"
import styled from "styled-components"
import axios from "axios"
import { useRouter } from 'next/router'

const SetNickName = () => {
    const router = useRouter()
    const [nickName, setNickName] = useState<string>('')

    const handleSignUp = () => {
        // axios.post('/api/nickname', {nickname : nickName})
        //     .then((res) => {
        //         localStorage.setItem('nickName', res.data.nickname)
        //         router.push('/brainWriting')
        //     })
        localStorage.setItem('nickName', nickName)
        router.push('/brainWriting')
    }
    

    return (
    <>
    <TextField id="outlined-basic" label="닉네임" variant="outlined" onChange={e => setNickName(e.target.value)} />
    <Button variant="contained" onClick={handleSignUp} >닉네임 설정하기</Button>
    </>
    )
}

export default SetNickName

