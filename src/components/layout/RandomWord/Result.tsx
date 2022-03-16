import React, { useState } from 'react';
import { ResultModal } from '../../common/Modals';
import { Button } from '@mui/material';

const Result = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log('여기에는 공유를 취소하는 api가 들어올 것입니다. ');
  };

  return (
    <>
      <h1>요것이 결과페이지!</h1>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        완료
      </Button>
      {isOpen && <ResultModal onClickBtn1={handleCancel} onClickBtn2={handleConfirm} />}
    </>
  );
};

export { Result };
