import React, { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';

type ResultModalProps = {
  onClickBtn1?: () => void;
  onClickBtn2?: () => void;
};

function ResultModal({ onClickBtn1, onClickBtn2 }: ResultModalProps) {
  const [container] = useState(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'ResultModal');
    return modalRoot;
  });

  useLayoutEffect(() => {
    const root = document.getElementById('modal_root');
    if (!root) {
      return;
    }
    root.appendChild(container);
    return () => {
      root.removeChild(container);
    };
  }, []);

  const handleOnClick = () => {
    if (!onClickBtn1) return;
    onClickBtn1();
  };

  const handleOnClick2 = () => {
    if (!onClickBtn2) return;
    onClickBtn2();
  };

  return ReactDOM.createPortal(
    <>
      <S_ModalOverlay />
      <S_ModalWrapper>
        <h1>공유하시겠습니까?</h1>
        <ButtonWrapper>
          <Button variant="outlined" onClick={handleOnClick}>
            공유하지 않기
          </Button>
          <Button variant="contained" onClick={handleOnClick}>
            확인
          </Button>
        </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export { ResultModal };
