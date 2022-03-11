import React, { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import v8n from 'v8n';

type NicknameModalProps = {
  title: string;
  inviteMember: string;
  onClick?: (arg: any) => void;
};

/* 이 컴포넌트의 경우 스토리북에서 보여주기 위해서 만들어진 컴포넌트입니다. 
프로젝트에서 사용하는 모달의 경우 _app.tsx에 생성해둔 modal_root에 저희의 모달을 심어주는데, 
스토리북에서는 modal_root가 존재하지 않는 관계로 스토리북에서 보여주기 위한 모달로 root로 넣어주는 모달을 만들었습니다. 
오로지 스토리북만을 위한 컴포넌트입니다.  */

function S_NicknameModal({ title, inviteMember, onClick }: NicknameModalProps) {
  const [container] = useState(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'NicknameModal');
    return modalRoot;
  });
  const [nickname, setNickname] = useState<string>();
  const [isError, setIsError] = useState<boolean>();

  useLayoutEffect(() => {
    const root = document.getElementById('root');
    if (!root) {
      return;
    }
    root.appendChild(container);
    return () => {
      root.removeChild(container);
    };
  }, []);

  const handleOnClick = () => {
    if (!onClick) return;
    onClick(nickname);
  };

  const validation = v8n().string().length(2, 6);

  const checkValidation = (_nickname: string) => {
    setNickname(_nickname);
    setIsError(!validation.test(_nickname));
  };

  return ReactDOM.createPortal(
    <>
      <S_ModalOverlay />
      <S_ModalWrapper>
        <h1>{title}</h1>
        <h3>{inviteMember}님이 초대하셨습니다.</h3>
        <TextField error={isError} onChange={e => checkValidation(e.target.value)} />
        {isError && <ErrorMessage>닉네임은 2~6자 로 설정해주세요</ErrorMessage>}
        <Button onClick={handleOnClick}>닉네임 설정하기</Button>
      </S_ModalWrapper>
    </>,
    container,
  );
}

const S_ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const S_ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  min-width: 480px;
  max-width: 560px;
  z-index: 99;
`;

const ErrorWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const ErrorMessage = styled.sub`
  display: block;
  text-align: left;
  padding-top: 6px;
  font-size: 12px;
  color: red;
`;

export { S_NicknameModal };
